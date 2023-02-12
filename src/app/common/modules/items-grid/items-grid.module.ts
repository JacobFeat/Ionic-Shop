import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsGridComponent } from './items-grid.component';
import { IonicModule } from '@ionic/angular';
import { FiltersModalComponent } from './filters-modal/filters-modal.component';

@NgModule({
  declarations: [ItemsGridComponent, FiltersModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [ItemsGridComponent],
})
export class ItemsGridModule {}
