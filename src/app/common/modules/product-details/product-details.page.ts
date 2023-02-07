import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Product } from '../../defs/product-defs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  protected currentProduct: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('productId')) this.navigateBackToHome();
      this.initDataFromRouterParam(paramMap);
    });
  }

  private navigateBackToHome() {
    return this.navCtrl.navigateBack('/home');
  }

  private initDataFromRouterParam(paramMap: ParamMap): void {
    const productId = Number(paramMap.get('productId'));
    this.currentProduct = this.productsService.getProductById(productId);
    console.log(this.currentProduct);
  }
}
