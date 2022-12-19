import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorizontalListModule } from './modules/horizontal-list/horizontal-list.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HorizontalListModule],
  declarations: [],
  exports: [HorizontalListModule],
})
export class CustomCommonModule {}
