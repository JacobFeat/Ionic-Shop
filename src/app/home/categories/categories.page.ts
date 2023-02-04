import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Type } from 'src/app/common/defs/type.defs';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { TypesService } from 'src/app/common/services/types.service';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  protected productsTypes!: Type[];
  protected categoryName!: string;

  constructor(
    private categoriesService: CategoriesService,
    private typesService: TypesService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) this.navigateBackToHome();
      this.initDataFromRouterParam(paramMap);
    });
  }

  private navigateBackToHome() {
    return this.navCtrl.navigateBack('/home');
  }

  private initDataFromRouterParam(paramMap: ParamMap): void {
    const categoryId = Number(paramMap.get('id'));
    this.productsTypes =
      this.typesService.getAvailableTypesInCategory(categoryId);
    this.categoryName = this.categoriesService.getCategoryNameById(categoryId);
  }
}
