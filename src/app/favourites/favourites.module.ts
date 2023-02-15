import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritesPageRoutingModule } from './favourites-routing.module';

import { FavouritesPage } from './favourites.page';
import { CustomCommonModule } from '../common/common.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritesPageRoutingModule,
    CustomCommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [FavouritesPage],
})
export class FavouritesPageModule {}
