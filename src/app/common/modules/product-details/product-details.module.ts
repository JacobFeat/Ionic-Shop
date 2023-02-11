import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProductAvailabilityComponent } from './product-availability/product-availability.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ProductAvailabilityComponent]
})
export class ProductDetailsPageModule {}
