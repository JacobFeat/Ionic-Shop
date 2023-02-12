import { Product } from '../../defs/product-defs';

export interface SortByProperties {
  sortBy: keyof Pick<Product, 'name' | 'price'>;
  sortingOrder: 'Asc' | 'Desc';
}
