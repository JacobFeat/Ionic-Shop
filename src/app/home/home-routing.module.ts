import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (m) => m.CategoriesPageModule
      ),
  },
  {
    path: 'product-types',
    loadChildren: () =>
      import('./product-types/product-types.module').then(
        (m) => m.ProductTypesPageModule
      ),
  },
  {
    path: 'product-details',
    loadChildren: () =>
      import('../common/modules/product-details/product-details.module').then(
        (m) => m.ProductDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
