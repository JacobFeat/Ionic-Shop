import { Component, OnInit } from '@angular/core';
import { Ad } from '../common/defs/ad.defs';
import { Category, CategoryForYou } from '../common/defs/category.defs';
import { Product } from '../common/defs/product-defs';
import { HorizontalListItem } from '../common/modules/horizontal-list/horizontal-list.defs';
import { AdsService } from '../common/services/ads.service';
import { CategoriesService } from '../common/services/categories.service';
import { ProductsService } from '../common/services/products.service';
import { HomeListsModel } from './models/home-lists.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  protected specialForYouProducts!: Product[];
  protected categoriesForYou!: CategoryForYou[];
  protected categories!: Category[];
  protected ads!: Ad[];
  protected specialForYouProductsHorizontalModel!: HorizontalListItem;
  protected categoriesForYouHorizontalModel!: HorizontalListItem;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private adsService: AdsService
  ) {}

  ngOnInit(): void {
    this.initData();
    this.getHorizontalListModels();
  }

  initData(): void {
    this.specialForYouProducts = this.productsService.specialForYouProducts;
    this.categories = this.categoriesService.categories;
    this.categoriesForYou = this.categoriesService.categoriesForYou;
    this.ads = this.adsService.ads;
  }

  private getHorizontalListModels(): void {
    this.specialForYouProductsHorizontalModel = HomeListsModel.getProductsHorizontalModel();
    this.categoriesForYouHorizontalModel =
      HomeListsModel.getCategoriesForYouHorizontalModel();
  }
}
