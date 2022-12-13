import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPage } from './categories/categories.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'categories',
        component: CategoriesPage,
      },
    ],
  },
  // {
  //   path: 'categories',
  //   // loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
