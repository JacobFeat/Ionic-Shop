export interface Product {
    name: string;
    price: number;
    currency: string;
    availableSizes: ProductSize[];
    imgUrl: string;
    imgAlt?: string;
}

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type ProductKeys = keyof Product;
