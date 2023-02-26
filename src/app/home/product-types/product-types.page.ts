import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UnsubscribeComponent } from 'src/app/common/components/unsubscribe/unsubscribe.component';
import { Product } from 'src/app/common/defs/product-defs';
import { Type } from 'src/app/common/defs/type.defs';
import { ProductsService } from 'src/app/common/services/products.service';
import { TypesService } from 'src/app/common/services/types.service';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.page.html',
  styleUrls: ['./product-types.page.scss'],
})
export class ProductTypesPage extends UnsubscribeComponent implements OnInit {
  protected currentProductType: Type | undefined;
  protected products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private typesService: TypesService,
    private productsService: ProductsService
  ) {
    super();
  }

  ngOnInit() {
    this.registerSub(
      this.route.paramMap.subscribe((paramMap) => {
        if (!paramMap.has('typeId')) this.navigateBackToHome();

        const typeId = Number(paramMap.get('typeId'));
        const categoryId = Number(paramMap.get('categoryId'));
        this.initDataFromRouterParam(typeId);
        this.products = this.getAllProductsForThisSection(categoryId, typeId);
      })
    );
  }

  private getAllProductsForThisSection(
    categoryId: number,
    typeId: number
  ): Product[] {
    return this.productsService.getAllProductsByCategoryAndTypeId(
      categoryId,
      typeId
    );
  }

  private navigateBackToHome() {
    return this.navCtrl.navigateBack('/home');
  }

  private initDataFromRouterParam(typeId: number): void {
    this.currentProductType = this.typesService.getProductTypeById(typeId);
  }
}
