export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  availableSizes: ProductSize[];
  type_id: number;
  category_id: number;
  imgUrl: string;
}

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type ProductKeys = keyof Product;
