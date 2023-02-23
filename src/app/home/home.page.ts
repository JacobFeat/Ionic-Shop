import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { UnsubscribeComponent } from '../common/components/unsubscribe/unsubscribe.component';
import { Ad } from '../common/defs/ad.defs';
import { Category, CategoryForYou } from '../common/defs/category.defs';
import { Product } from '../common/defs/product-defs';
import { HorizontalListItem } from '../common/modules/horizontal-list/horizontal-list.defs';
import { ProductDetailsComponent } from '../common/modules/product-details/product-details.component';
import { AdsService } from '../common/services/ads.service';
import { CategoriesService } from '../common/services/categories.service';
import { ProductsService } from '../common/services/products.service';
import { HomeListsModel } from './models/home-lists.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends UnsubscribeComponent implements OnInit {
  protected specialForYouProducts!: Product[];
  protected categoriesForYou!: CategoryForYou[];
  protected categories!: Category[];
  protected ads!: Ad[];
  protected specialForYouProductsHorizontalModel!: HorizontalListItem;
  protected categoriesForYouHorizontalModel!: HorizontalListItem;
  protected productDetailComponent = ProductDetailsComponent;

  protected searchControl!: FormControl<string>;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private adsService: AdsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initData();
    this.getHorizontalListModels();
    this.searchProductsOnValueChanges();
  }

  initData(): void {
    this.specialForYouProducts = this.productsService.specialForYouProducts;
    this.categories = this.categoriesService.categories;
    this.categoriesForYou = this.categoriesService.categoriesForYou;
    this.ads = this.adsService.ads;
    this.searchControl = new FormControl();
  }

  private getHorizontalListModels(): void {
    this.specialForYouProductsHorizontalModel =
      HomeListsModel.getProductsHorizontalModel();
    this.categoriesForYouHorizontalModel =
      HomeListsModel.getCategoriesForYouHorizontalModel();
  }

  private searchProductsOnValueChanges(): void {
    this.registerSub(
      this.searchControl.valueChanges
        .pipe(
          debounceTime(300),
          filter((val) => val.trim() !== '')
        )
        .subscribe(this.searchProductByName.bind(this))
    );
  }

  private searchProductByName(productName: string): void {
    const foundProducts =
      this.productsService.searchProductsByName(productName);
    console.log(foundProducts);
  }
}
