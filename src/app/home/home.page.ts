import { Component, OnInit } from '@angular/core';
import { Category, CategoryForYou } from '../common/defs/category.defs';
import { Product } from '../common/defs/product-defs';
import { Type } from '../common/defs/type.defs';
import {
  categories,
  categoriesForYou,
  products,
  types,
} from '../common/mocks/database';
import { HorizontalListItem } from '../common/modules/horizontal-list/horizontal-list.defs';
import { HomeListsModel } from './models/home-lists.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  protected products: Product[] = products;
  protected categoriesForYou: CategoryForYou[] = categoriesForYou;
  protected productsHorizontalModel!: HorizontalListItem;
  protected categoriesForYouHorizontalModel!: HorizontalListItem;

  constructor() {}

  ngOnInit() {
    this.getHorizontalListModels();
    console.log(this.categoriesForYou);
  }

  private getHorizontalListModels() {
    this.productsHorizontalModel = HomeListsModel.getProductsHorizontalModel();
    this.categoriesForYouHorizontalModel =
      HomeListsModel.getCategoriesForYouHorizontalModel();
  }
}
