import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductTypesPageRoutingModule } from './product-types-routing.module';

import { ProductTypesPage } from './product-types.page';
import { CustomCommonModule } from 'src/app/common/common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomCommonModule,
    ProductTypesPageRoutingModule
  ],
  declarations: [ProductTypesPage]
})
export class ProductTypesPageModule {}
