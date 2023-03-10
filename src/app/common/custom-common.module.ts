import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorizontalListModule } from './modules/horizontal-list/horizontal-list.module';
import { AdBannerModule } from './modules/ad-banner/ad-banner.module';
import { ItemsGridModule } from './modules/items-grid/items-grid.module';
import { EmptyGridModule } from './modules/empty-grid/empty-grid.module';
import { SearchListModule } from './modules/search-list/search-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorizontalListModule,
    AdBannerModule,
    ItemsGridModule,
    EmptyGridModule,
    SearchListModule,
  ],
  exports: [
    HorizontalListModule,
    AdBannerModule,
    ItemsGridModule,
    EmptyGridModule,
    SearchListModule,
  ],
})
export class CustomCommonModule {}
