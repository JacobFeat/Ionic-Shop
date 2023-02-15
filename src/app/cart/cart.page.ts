import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ProductWithChoosenSize } from '../common/defs/product-defs';
import { CartService } from '../common/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  protected products!: ProductWithChoosenSize[];
  protected emptyGridMessage = 'Brak produktów w koszyku';
  protected emptyGridIconName = 'bag-no-color';

  constructor(
    private cartService: CartService,
    private alertController: AlertController,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.cartService.productsInCart$.subscribe((products) => {
      this.products = products;
    });
  }

  protected deleteProduct(id: number): void {
    this.products.splice(id, 1);
  }

  protected async finalizePurchase() {
    const alert = await this.alertController.create({
      header: `${this.translate.instant('common.attention')}!`,
      message: `${this.translate.instant(
        'common.functionWillBeAvailableSoon'
      )}.`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
