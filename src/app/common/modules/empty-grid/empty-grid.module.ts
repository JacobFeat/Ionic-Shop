import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyGridComponent } from './empty-grid.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [EmptyGridComponent],
  imports: [CommonModule, IonicModule],
  exports: [EmptyGridComponent],
})
export class EmptyGridModule {}
