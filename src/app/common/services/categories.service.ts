import { Injectable } from '@angular/core';
import { Category, CategoryForYou } from '../defs/category.defs';
import { categories, categoriesForYou } from '../mocks/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  get categories(): Category[] {
    return categories;
  }

  get categoriesForYou(): CategoryForYou[] {
    return categoriesForYou;
  }
}
