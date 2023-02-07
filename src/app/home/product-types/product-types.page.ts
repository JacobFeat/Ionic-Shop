import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Type } from 'src/app/common/defs/type.defs';
import { TypesService } from 'src/app/common/services/types.service';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.page.html',
  styleUrls: ['./product-types.page.scss'],
})
export class ProductTypesPage implements OnInit {
  protected currentProductType: Type | undefined;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private typesService: TypesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('typeId')) this.navigateBackToHome();
      this.initDataFromRouterParam(paramMap);
    });
  }

  private navigateBackToHome() {
    return this.navCtrl.navigateBack('/home');
  }

  private initDataFromRouterParam(paramMap: ParamMap): void {
    const typeId = Number(paramMap.get('typeId'));
    this.currentProductType = this.typesService.getProductTypeById(typeId);
    console.log(this.currentProductType);
  }
}
