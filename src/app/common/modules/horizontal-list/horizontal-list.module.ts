import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalListComponent } from './horizontal-list.component';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HorizontalListComponent],
  imports: [CommonModule, SwiperModule, IonicModule, RouterModule],
  exports: [HorizontalListComponent],
})
export class HorizontalListModule {}
