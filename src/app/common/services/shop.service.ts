import { Injectable } from '@angular/core';
import { Shop } from '../defs/shops.defs';
import { products } from '../mocks/database';
import { shops } from '../mocks/shop-database';

@Injectable({
  providedIn: 'root',
})
export class ShopsService {
  constructor() {}

  get shops() {
    return shops;
  }

  getShopsWithAvailableProduct(productId: number): Shop[] {
    return shops
      .filter((shop) =>
        shop.products.some((product) => product.id === productId)
      )
      .map((shop) => ({
        ...shop,
        products: shop.products.filter((product) => product.id === productId),
      }));
  }
}
