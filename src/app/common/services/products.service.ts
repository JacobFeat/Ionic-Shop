import { Injectable } from '@angular/core';
import { Product } from '../defs/product-defs';
import {
  getAllProductsByCategoryAndTypeId,
  getAllProductsByTypeId,
  getProductById,
  getTheMostPopularProductsByCategoryId,
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

  getTheMostPopularProductsByCategoryId(categoryId: number) {
    return getTheMostPopularProductsByCategoryId(categoryId);
  }

  get specialForYouProducts() {
    return specialForYouProducts();
  }

  getProductById(productId: number) {
    return getProductById(productId);
  }

  getAllProductsByTypeId(typeId: number): Product[] {
    return getAllProductsByTypeId(typeId);
  }

  getAllProductsByCategoryAndTypeId(
    categoryId: number,
    typeId: number
  ): Product[] {
    return getAllProductsByCategoryAndTypeId(categoryId, typeId);
  }
}
