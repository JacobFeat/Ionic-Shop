import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Type } from 'src/app/common/defs/type.defs';
import { TypesService } from 'src/app/common/services/types.service';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  protected loadedCategories!: Category[];
  protected productsTypes!: Type[];

  constructor(
    private typesService: TypesService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.productsTypes = this.typesService.getAvailableTypesInCategory(
        Number(paramMap.get('id'))
      );
      console.log(this.productsTypes);
    });
  }
}
