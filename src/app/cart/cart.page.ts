import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.productsInCart$.subscribe((products) => {
      this.products = products;
    });
  }

  protected deleteProduct(id: number): void {
    this.products.splice(id, 1);
  }
}
