import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorizontalListModule } from './modules/horizontal-list/horizontal-list.module';
import { AdBannerModule } from './modules/ad-banner/ad-banner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorizontalListModule,
    AdBannerModule,
  ],
  declarations: [],
  exports: [HorizontalListModule, AdBannerModule],
})
export class CustomCommonModule {}
