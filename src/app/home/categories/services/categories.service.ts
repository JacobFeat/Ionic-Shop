import { Injectable } from '@angular/core';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private _categories: Category[] = [
    {
      id: 1,
      name: 'Kurtki',
    },
    {
      id: 2,
      name: 'Koszulki',
    },
    {
      id: 3,
      name: 'Bluzy',
    },
    {
      id: 4,
      name: 'Spodnie',
    },
  ];

  get categories() {
    return [...this._categories];
  }
}
