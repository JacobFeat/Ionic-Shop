import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product, ProductWithChoosenSize } from '../defs/product-defs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _productsInCart!: BehaviorSubject<ProductWithChoosenSize[]>;
  productsInCart$!: Observable<ProductWithChoosenSize[]>;

  constructor() {
    this._productsInCart = new BehaviorSubject<ProductWithChoosenSize[]>([]);
    this.productsInCart$ = this._productsInCart.asObservable();
  }

  addProductToCart(product: ProductWithChoosenSize): void {
    const currentCartProducts = this._productsInCart.getValue();
    this._productsInCart.next([...currentCartProducts, product]);
  }
}
