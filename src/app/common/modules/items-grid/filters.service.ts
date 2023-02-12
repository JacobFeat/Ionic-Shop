import { Injectable } from '@angular/core';
import { Product } from '../../defs/product-defs';
import { SortOption } from './filters-modal/filter-modal.defs';
import { SortByProperties } from './items-grid.defs';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor() {}

  sortProducts(products: Product[], sortValue: SortOption): Product[] {
    if (sortValue === '') return products;

    const sortByProperties = this.getSortByProperties(
      sortValue
    ) as SortByProperties;

    return products.sort((a, b) => {
      if (sortByProperties.sortingOrder === 'Asc') {
        return a[sortByProperties.sortBy] > b[sortByProperties.sortBy] ? 1 : -1;
      }
      return a[sortByProperties.sortBy] < b[sortByProperties.sortBy] ? 1 : -1;
    });
  }

  private getSortByProperties(sortValue: SortOption): SortByProperties | '' {
    switch (sortValue) {
      case 'nameAsc':
        return {
          sortBy: 'name',
          sortingOrder: 'Asc',
        };
      case 'nameDesc':
        return {
          sortBy: 'name',
          sortingOrder: 'Desc',
        };
      case 'priceAsc':
        return {
          sortBy: 'price',
          sortingOrder: 'Asc',
        };
      case 'priceDesc':
        return {
          sortBy: 'price',
          sortingOrder: 'Desc',
        };
      default:
        return '';
    }
  }
}
