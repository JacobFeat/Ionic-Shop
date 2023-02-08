import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'categories/:categoryId/product-types/:typeId',
    loadChildren: () =>
      import('./product-types/product-types.module').then(
        (m) => m.ProductTypesPageModule
      ),
  },
  {
    path: 'categories/:categoryId',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (m) => m.CategoriesPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
