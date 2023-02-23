import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UnsubscribeComponent } from 'src/app/common/components/unsubscribe/unsubscribe.component';
import { Ad } from 'src/app/common/defs/ad.defs';
import { Product } from 'src/app/common/defs/product-defs';
import { Type } from 'src/app/common/defs/type.defs';
import { HorizontalListItem } from 'src/app/common/modules/horizontal-list/horizontal-list.defs';
import { ProductDetailsComponent } from 'src/app/common/modules/product-details/product-details.component';
import { AdsService } from 'src/app/common/services/ads.service';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { ProductsService } from 'src/app/common/services/products.service';
import { TypesService } from 'src/app/common/services/types.service';
import { CategoriesListsModel } from './models/categories-lists.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage extends UnsubscribeComponent implements OnInit {
  private paramName = 'categoryId';
  protected categoryId!: number;
  protected productsTypes!: Type[];
  protected categoryName!: string;
  protected ad!: Ad | undefined;
  protected mostPopularProducts!: Product[];
  protected mostPopularProductsHorizontalModel!: HorizontalListItem;
  protected productDetailComponent = ProductDetailsComponent;

  constructor(
    private categoriesService: CategoriesService,
    private typesService: TypesService,
    private adsService: AdsService,
    private productsService: ProductsService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.registerSub(
      this.route.paramMap.subscribe((paramMap) => {
        if (!paramMap.has(this.paramName)) this.navigateBackToHome();

        this.categoryId = Number(paramMap.get(this.paramName));
        this.initDataFromRouterParam();
        this.initTheMostPopularProductsForThisCategory();
        this.getHorizontalListModels();
        this.ad = this.getAdByCategoryId();
      })
    );
  }

  private navigateBackToHome() {
    return this.navCtrl.navigateBack('/home');
  }

  private initDataFromRouterParam(): void {
    this.productsTypes = this.typesService.getAvailableTypesInCategory(
      this.categoryId
    );
    this.categoryName = this.categoriesService.getCategoryNameById(
      this.categoryId
    );
  }

  private initTheMostPopularProductsForThisCategory(): void {
    this.mostPopularProducts =
      this.productsService.getTheMostPopularProductsByCategoryId(
        this.categoryId
      );
  }

  private getHorizontalListModels(): void {
    this.mostPopularProductsHorizontalModel =
      CategoriesListsModel.getMostPopularProductsHorizontalModel();
  }

  private getAdByCategoryId(): Ad | undefined {
    return this.adsService.getAdByCategoryId(this.categoryId);
  }
}
