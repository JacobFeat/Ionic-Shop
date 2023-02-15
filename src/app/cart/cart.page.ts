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
  protected emptyGridIconName = 'bag-no-color';
  protected totalOrderAmount = 0;

  constructor(
    private cartService: CartService,
    private alertController: AlertController,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.cartService.productsInCart$.subscribe((products) => {
      this.products = products;
      this.totalOrderAmount = this.products.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
    });
  }

  protected deleteProduct(id: number): void {
    this.totalOrderAmount = this.substractDeletedProductFromTotalOrder(id);
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

  private substractDeletedProductFromTotalOrder(id: number): number {
    return this.totalOrderAmount - this.products[id].price;
  }
}
