import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CustomCommonModule } from '../common/common.module';
import { ProductDetailsComponent } from '../common/modules/product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CustomCommonModule,
  ],
  declarations: [HomePage, ProductDetailsComponent],
})
export class HomePageModule {}
