import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CustomCommonModule } from '../../common.module';
import { ProductAvailabilityComponent } from './product-availability/product-availability.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CustomCommonModule],
  declarations: [ProductAvailabilityComponent],
})
export class ProductDetailsPageModule {}
