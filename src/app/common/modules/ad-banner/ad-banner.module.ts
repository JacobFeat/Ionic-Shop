import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AdBannerComponent } from './ad-banner.component';

@NgModule({
  declarations: [AdBannerComponent],
  imports: [CommonModule, IonicModule],
  exports: [AdBannerComponent],
})
export class AdBannerModule {}
