import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorizontalListModule } from './modules/horizontal-list/horizontal-list.module';
import { AdBannerModule } from './modules/ad-banner/ad-banner.module';
import { ItemsGridModule } from './modules/items-grid/items-grid.module';
import { EmptyGridModule } from './modules/empty-grid/empty-grid.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorizontalListModule,
    AdBannerModule,
    ItemsGridModule,
    EmptyGridModule,
  ],
  exports: [HorizontalListModule, AdBannerModule, ItemsGridModule, EmptyGridModule],
})
export class CustomCommonModule {}
