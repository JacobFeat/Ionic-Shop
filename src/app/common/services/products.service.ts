import { Injectable } from '@angular/core';
import { Product } from '../defs/product-defs';
import {
  getProductById,
  getTheMostPopularProducts as getTheMostPopularProducts,
  products,
  specialForYouProducts,
} from '../mocks/database';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  get products(): Product[] {
    return products;
  }

  get theMostPopularProducts() {
    return getTheMostPopularProducts();
  }

  get specialForYouProducts() {
    return specialForYouProducts();
  }

  getProductById(productId: number) {
    return getProductById(productId);
  }
}
