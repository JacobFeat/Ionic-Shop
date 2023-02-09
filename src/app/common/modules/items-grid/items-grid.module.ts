import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsGridComponent } from './items-grid.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ItemsGridComponent],
  imports: [CommonModule, IonicModule],
  exports: [ItemsGridComponent],
})
export class ItemsGridModule {}
