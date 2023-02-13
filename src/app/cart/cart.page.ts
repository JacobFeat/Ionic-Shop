import { Component, OnInit } from '@angular/core';
import { Product } from '../common/defs/product-defs';
import { ProductsService } from '../common/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  protected products!: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.products.slice(0, 2);
  }
}
