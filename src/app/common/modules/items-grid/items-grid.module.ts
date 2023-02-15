import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsGridComponent } from './items-grid.component';
import { IonicModule } from '@ionic/angular';
import { FiltersModalComponent } from './filters-modal/filters-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { EmptyGridModule } from '../empty-grid/empty-grid.module';

@NgModule({
  declarations: [ItemsGridComponent, FiltersModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    EmptyGridModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ItemsGridComponent],
})
export class ItemsGridModule {}
