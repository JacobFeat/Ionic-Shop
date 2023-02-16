import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ActionSheetController,
  IonModal,
  ModalController,
} from '@ionic/angular';
import {
  Product,
  ProductSize,
  ProductWithChoosenSize,
} from '../../defs/product-defs';
import { ProductAvailabilityComponent } from './product-availability/product-availability.component';
import { ActionSheetButtonsModel } from './product-details.defs';
import { Geolocation } from '@capacitor/geolocation';
import { Coordinates } from '../../defs/location.defs';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: Product | undefined;
  @ViewChild(IonModal) modal!: IonModal;

  private userLocation!: Coordinates;
  protected productsInCartAmount = 0;
  protected size!: ProductSize;

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private cartService: CartService,
    private router: Router,
    private translate: TranslateService 
  ) {}

  ngOnInit() {
    this.getCurrentUserLocation();
    this.cartService.productsInCart$.subscribe((products) => {
      this.productsInCartAmount = products.length;
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: this.translate.instant('product.chooseSize'),
      buttons: this.getAvailableSizesModel(this.product),

    });

    await actionSheet.present();
    const result = await actionSheet.onDidDismiss();

    if (result.role === 'setSize') {
      this.size = result.data.size;
    }
  }

  async openProductAvailabilityModal() {
    const modal = await this.modalCtrl.create({
      component: ProductAvailabilityComponent,
      componentProps: {
        product: this.product,
        userLocation: this.userLocation,
      },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

  protected addProductToCart(): void {
    const productWithChoosenSize = {
      ...this.product,
      choosenSize: this.size,
    } as ProductWithChoosenSize;
    this.cartService.addProductToCart(productWithChoosenSize);
  }

  protected goToCart(): void {
    this.modalCtrl.dismiss(null, 'goToCart');
    this.router.navigateByUrl('/cart');
  }

  protected onCancel(): void {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  private getCurrentUserLocation = async () => {
    await Geolocation.getCurrentPosition().then(res => {
      const { longitude, latitude } = res.coords;
      this.userLocation = { longitude, latitude };
    });
  };

  private getAvailableSizesModel(
    product: Product | undefined
  ): ActionSheetButtonsModel[] {
    const model: ActionSheetButtonsModel[] = [];
    model.push(this.getCancelButton());
    model.push(...this.getAvailableSizesButtons(product));
    return model;
  }

  private getCancelButton(): ActionSheetButtonsModel {
    return {
      text: this.translate.instant('common.cancel'),
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    };
  }

  private getAvailableSizesButtons(
    product: Product | undefined
  ): ActionSheetButtonsModel[] {
    const availableSizesButtons: ActionSheetButtonsModel[] = [];
    product?.availableSizes.forEach((size) =>
      availableSizesButtons.push({
        text: size,
        role: 'setSize',
        data: {
          size: size,
        },
      })
    );
    return availableSizesButtons;
  }
}
