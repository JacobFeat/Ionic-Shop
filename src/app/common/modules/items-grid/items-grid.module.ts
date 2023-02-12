import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsGridComponent } from './items-grid.component';
import { IonicModule } from '@ionic/angular';
import { FiltersModalComponent } from './filters-modal/filters-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemsGridComponent, FiltersModalComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [ItemsGridComponent],
})
export class ItemsGridModule {}
