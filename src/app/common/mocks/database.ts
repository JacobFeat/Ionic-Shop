import { type } from 'os';
import { Ad } from '../defs/ad.defs';
import { Category, CategoryForYou } from '../defs/category.defs';
import { Product } from '../defs/product-defs';
import { Type } from '../defs/type.defs';

export const products: Product[] = [
  {
    id: 1,
    name: 'Kurtka puchowa',
    description: 'Ciepła kurtka puchowa na zimowe wyjścia.',
    price: 199.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/8.jpg',
    type_id: 1,
    category_id: 1,
  },
  {
    id: 2,
    name: 'Koszulka z nadrukiem',
    description: 'Modna koszulka z nadrukiem na lato.',
    price: 59.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/9.jpg',
    type_id: 1,
    category_id: 1,
  },
  {
    id: 3,
    name: 'Bluza z kapturem',
    description: 'Wygodna bluza z kapturem na codzienne wyjścia.',
    price: 89.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/4.jpg',
    type_id: 3,
    category_id: 1,
  },
  {
    id: 4,
    name: 'Spodnie dresowe',
    description: 'Wygodne spodnie dresowe na trening lub codzienne noszenie.',
    price: 129.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/16.jpg',
    type_id: 4,
    category_id: 1,
  },
  {
    id: 5,
    name: 'Sukienka letnia',
    description: 'Modna sukienka letnia na wakacje.',
    price: 149.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/2.jpg',
    type_id: 5,
    category_id: 2,
  },
  {
    id: 6,
    name: 'Buty treningowe',
    description: 'Wytrzymałe buty treningowe dla biegaczy.',
    price: 249.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/20.jpg',
    type_id: 6,
    category_id: 1,
  },
];

export const types: Type[] = [
  {
    id: 1,
    name: 'Kurtki',
    imgUrl: '../../../assets/mockImages/2.jpg',
  },
  {
    id: 2,
    name: 'Koszulki',
    imgUrl: '../../../assets/mockImages/2.jpg',
  },
  {
    id: 3,
    name: 'Bluzy',
    imgUrl: '../../../assets/mockImages/2.jpg',
  },
  {
    id: 4,
    name: 'Spodnie',
    imgUrl: '../../../assets/mockImages/2.jpg',
  },
  {
    id: 5,
    name: 'Sukienki',
    imgUrl: '../../../assets/mockImages/2.jpg',
  },
  {
    id: 6,
    name: 'Buty',
    imgUrl: '../../../assets/mockImages/2.jpg',
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'On',
  },
  {
    id: 2,
    name: 'Ona',
  },
  {
    id: 3,
    name: 'Dziecko',
  },
  {
    id: 4,
    name: 'Home',
  },
  {
    id: 5,
    name: 'Sport',
  },
];

// TODO imgUrl raczej dac to types
export const categoriesForYou: CategoryForYou[] = [
  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 1),
    imgUrl: '../../../assets/mockImages/19.jpg',
  },
  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 2),
    imgUrl: '../../../assets/mockImages/20.jpg',
  },
  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 3),
    imgUrl: '../../../assets/mockImages/21.jpg',
  },
  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 4),
    imgUrl: '../../../assets/mockImages/22.jpg',
  },
  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 6),
    imgUrl: '../../../assets/mockImages/23.jpg',
  },
];

function getNameByIdInCollection(
  collection: Collection[],
  id: number
): string | undefined {
  return collection.find((item) => item.id === id)?.name;
}

interface Collection {
  name: string;
  id: number;
}

export const ads: Ad[] = [
  {
    imgUrl: '/assets/mockImages/ad1.jpg',
    title: 'Sprawdź wyjątkowe promocje',
    height: 220,
  },
  {
    imgUrl: '/assets/mockImages/ad11.jpg',
    title: 'Zapowiadają się przytulne Święta!',
    height: 440,
  },
];

export function getAvailableTypesInCategory(categoryId: number): Type[] {
  const productsInCategory = findAllProductsInCategoryById(categoryId);
  const availableTypesId = getAvailableTypesIdByProducts(productsInCategory);
  return getAllTypesById(availableTypesId);
}

function findAllProductsInCategoryById(categoryId: number): Product[] {
  return products.filter((product) => product.category_id === categoryId);
}

function getAvailableTypesIdByProducts(products: Product[]): number[] {
  return [...new Set(products.map((product) => product.type_id))];
}

function getAllTypesById(typeIdsCollection: number[]): Type[] {
  return types.filter((type) => typeIdsCollection.includes(type.id));
}
