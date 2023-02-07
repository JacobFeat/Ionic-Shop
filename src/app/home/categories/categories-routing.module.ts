import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsPage } from 'src/app/common/modules/product-details/product-details.page';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: ':id',
    component: CategoriesPage,
  },
  {
    path: ':id/product-details/:productId',
    component: ProductDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
