import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../defs/product-defs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _productsInCart!: BehaviorSubject<Product[]>;
  productsInCart$!: Observable<Product[]>;

  constructor() {
    this._productsInCart = new BehaviorSubject<Product[]>([]);
    this.productsInCart$ = this._productsInCart.asObservable();
  }

  addProductToCart(product: Product): void {
    const currentCartProducts = this._productsInCart.getValue();
    this._productsInCart.next([...currentCartProducts, product]);
  }
}
