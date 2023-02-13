import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProductAvailabilityComponent } from './product-availability/product-availability.component';
import { CustomCommonModule } from '../../common.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CustomCommonModule],
  declarations: [ProductAvailabilityComponent],
})
export class ProductDetailsPageModule {}
