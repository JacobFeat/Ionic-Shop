import { Component, OnInit } from '@angular/core';
import { Category } from '../common/defs/category-defs';
import { Product } from '../common/defs/product-defs';
import { categories } from '../common/mocks/categories';
import { products } from '../common/mocks/products';
import { HorizontalListItem } from '../common/modules/horizontal-list/horizontal-list.defs';
import { HomeListsModel } from './models/home-lists.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  protected products: Product[] = products;
  protected categories: Category[] = categories;
  protected productsHorizontalModel!: HorizontalListItem;
  protected categoriesHorizontalModel!: HorizontalListItem;

  constructor() {}

  ngOnInit() {
    this.getHorizontalListModels();
  }

  private getHorizontalListModels() {
    this.productsHorizontalModel = HomeListsModel.getProductsHorizontalModel();
    this.categoriesHorizontalModel =
      HomeListsModel.getCategoriesHorizontalModel();
  }
}
