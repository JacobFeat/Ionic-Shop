import { Ad } from '../defs/ad.defs';
import { Category, CategoryForYou } from '../defs/category.defs';
import { Product } from '../defs/product-defs';
import { Type } from '../defs/type.defs';

export const products: Product[] = [
  {
    id: 1,
    name: 'Kurtka puchowa',
    description:
      'Idealna na zimowe wyjścia, ta ciepła kurtka puchowa zapewni ochronę przed niskimi temperaturami. Wysoka jakość wykonania i trwałe materiały zapewniają komfort noszenia i długotrwałą wytrzymałość.',
    price: 199.99,
    availableSizes: ['S', 'M', 'L', 'XL'],
    imgUrl: '../../../assets/mockImages/8.jpg',
    type_id: 1,
    category_id: 1,
  },
  {
    id: 2,
    name: 'Koszulka z nadrukiem',
    description:
      'Ta modna koszulka z nadrukiem to doskonały wybór na lato. Wykonana z miękkiej i przewiewnej tkaniny zapewnia komfort noszenia przez cały dzień. Nadruk jest trwały i nie blaknie po wielu praniach.',
    price: 59.99,
    availableSizes: ['S', 'L'],
    imgUrl: '../../../assets/mockImages/9.jpg',
    type_id: 1,
    category_id: 1,
  },
  {
    id: 3,
    name: 'Bluza z kapturem',
    description:
      'Ta wygodna bluza z kapturem jest idealna na codzienne wyjścia. Wykonana z miękkiej tkaniny zapewnia komfort noszenia, a kaptur dodatkowo chroni przed wiatrem i deszczem. Dostępna w kilku rozmiarach dla wygodnego dopasowania.',
    price: 89.99,
    availableSizes: ['M', 'L'],
    imgUrl: '../../../assets/mockImages/4.jpg',
    type_id: 3,
    category_id: 1,
  },
  {
    id: 4,
    name: 'Spodnie dresowe',
    description:
      'Te wygodne spodnie dresowe są idealne na trening lub codzienne noszenie. Materiał jest miękki i elastyczny, co zapewnia swobodę ruchów i komfort noszenia. Dostępne w kilku rozmiarach dla wygodnego dopasowania.',
    price: 129.99,
    availableSizes: ['S', 'M'],
    imgUrl: '../../../assets/mockImages/16.jpg',
    type_id: 4,
    category_id: 1,
  },
  {
    id: 5,
    name: 'Sukienka letnia',
    description:
      'Elegancka i kobieca sukienka na lato, wykonana z przewiewnych i lekkich materiałów. Ozdobiona modnym wzorem i dostępna w kilku rozmiarach (S, M, L). Idealna na wakacje, plażę lub letnie wyjścia.',
    price: 149.99,
    availableSizes: ['S', 'XL', 'XXL'],
    imgUrl: '../../../assets/mockImages/2.jpg',
    type_id: 5,
    category_id: 2,
  },
  {
    id: 6,
    name: 'Buty treningowe',
    description:
      'Doskonałe buty treningowe dla biegaczy i aktywnych sportowców. Wzmocniona podeszwa i amortyzująca wkładka zapewniają komfort i ochronę dla stóp.',
    price: 249.99,
    availableSizes: ['M', 'L'],
    imgUrl: '../../../assets/mockImages/20.jpg',
    type_id: 6,
    category_id: 1,
  },
  {
    id: 7,
    name: 'Kurtka skórzana',
    description:
      'Modna i trwała kurtka skórzana, idealna na chłodniejsze dni. Wykonana z wysokiej jakości skóry i wyposażona w ocieplenie, zapewnia ochronę przed niskimi temperaturami.',
    price: 399.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/1.jpg',
    type_id: 1,
    category_id: 1,
  },
  {
    id: 8,
    name: 'Koszulka bez rękawów',
    description:
      'Lekka i przewiewna koszulka bez rękawów, idealna na lato. Wykonana z delikatnej tkaniny i ozdobiona modnym nadrukiem, doskonale sprawdzi się w ciepłe dni.',
    price: 29.99,
    availableSizes: ['S', 'M', 'L', 'XL'],
    imgUrl: '../../../assets/mockImages/3.jpg',
    type_id: 1,
    category_id: 2,
  },
  {
    id: 9,
    name: 'Bluza z kieszeniami',
    description:
      'Wygodna bluza z kieszeniami i wysokim kołnierzem, idealna na codzienne wyjścia. Wykonana z miękkiej tkaniny i ozdobiona modnymi aplikacjami, zapewnia komfort i stylowy wygląd.',
    price: 119.99,
    availableSizes: ['L', 'XXL'],
    imgUrl: '../../../assets/mockImages/5.jpg',
    type_id: 3,
    category_id: 1,
  },
  {
    id: 10,
    name: 'Spodnie dżinsowe',
    description:
      'Modne i wygodne spodnie dżinsowe, idealne na codzienne noszenie. Wykonane z trwałego materiału i ozdobione modnymi aplikacjami, zapewniają stylowy wygląd i wygodę noszenia.',
    price: 99.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/6.jpg',
    type_id: 4,
    category_id: 1,
  },
  {
    id: 11,
    name: 'Kurtka zimowa z futerkiem',
    description:
      'Ciepła i stylowa kurtka zimowa z futerkiem, idealna na największe mrozy. Ocieplenie zapewnia maksymalną izolację termiczną, a dodatkowe elementy, takie jak kaptur i wewnętrzne kieszenie, dodają dodatkowy komfort i praktyczność.',
    price: 299.99,
    availableSizes: ['S', 'M', 'L', 'XL'],
    imgUrl: '../../../assets/mockImages/2.jpg',
    type_id: 1,
    category_id: 1,
  },
  {
    id: 12,
    name: 'Kurtka z kapturem',
    description:
      'Lekka i wygodna kurtka z kapturem, idealna na jesienne wieczory. Kaptur i wewnętrzne kieszenie dodają dodatkowy komfort, a materiał jest wodoodporny i odporny na wiatr.',
    price: 199.99,
    availableSizes: ['S', 'M', 'L'],
    imgUrl: '../../../assets/mockImages/12.jpg',
    type_id: 1,
    category_id: 1,
  },
  {
    id: 13,
    name: 'Kurtka pikowana',
    description:
      'Modna i stylowa kurtka pikowana, doskonała na jesienne wieczory. Materiał jest wodoodporny i odporny na wiatr, a kieszenie i zapięcie na suwak dodają dodatkową praktyczność.',
    price: 199.99,
    availableSizes: ['S', 'M', 'L', 'XL'],
    imgUrl: '../../../assets/mockImages/13.jpg',
    type_id: 1,
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
    categoryId: 1,
    typeId: 1,
    imgUrl: '../../../assets/mockImages/19.jpg',
  },

  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 3),
    categoryId: 1,
    typeId: 3,
    imgUrl: '../../../assets/mockImages/21.jpg',
  },
  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 4),
    categoryId: 1,
    typeId: 4,
    imgUrl: '../../../assets/mockImages/22.jpg',
  },
  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 6),
    categoryId: 1,
    typeId: 6,
    imgUrl: '../../../assets/mockImages/23.jpg',
  },
  {
    categoryName: getNameByIdInCollection(categories, 1),
    typeName: getNameByIdInCollection(types, 2),
    categoryId: 1,
    typeId: 2,
    imgUrl: '../../../assets/mockImages/20.jpg',
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
  {
    imgUrl: '/assets/mockImages/20.jpg',
    title: 'The suitmen x Graysh',
    height: 440,
    categoryId: 1,
  },
  {
    imgUrl: '/assets/mockImages/9.jpg',
    title: 'The women x Graysh',
    height: 440,
    categoryId: 2,
  },
  {
    imgUrl: '/assets/mockImages/3.jpg',
    title: 'The pyjamas x Children',
    height: 440,
    categoryId: 3,
  },
  {
    imgUrl: '/assets/mockImages/ad11.jpg',
    title: 'Home x Graysh',
    height: 440,
    categoryId: 4,
  },
  {
    imgUrl: '/assets/mockImages/21.jpg',
    title: "Let's Sport",
    height: 440,
    categoryId: 5,
  },
];

export function getAdByCategoryId(categoryId: number): Ad | undefined {
  return ads.find((ad) => ad.categoryId === categoryId);
}

export function getAvailableTypesInCategory(categoryId: number): Type[] {
  const productsInCategory = findAllProductsInCategoryById(categoryId);
  const availableTypesId = getAvailableTypesIdByProducts(productsInCategory);
  return getAllTypesById(availableTypesId);
}

function findAllProductsInCategoryById(categoryId: number): Product[] {
  return [...products].filter((product) => product.category_id === categoryId);
}

function getAvailableTypesIdByProducts(products: Product[]): number[] {
  return [...new Set(products.map((product) => product.type_id))];
}

function getAllTypesById(typeIdsCollection: number[]): Type[] {
  return [...types].filter((type) => typeIdsCollection.includes(type.id));
}

export function getCategoryNameById(categoryId: number): string {
  return [...categories].find((category) => category.id === categoryId)!.name;
}

export function getTheMostPopularProductsByCategoryId(
  categoryId: number
): Product[] {
  const theMostPopularProductsSet = [
    {
      categoryId: 1,
      products: [4, 5, 7, 3],
    },
    {
      categoryId: 2,
      products: [2, 4, 3, 1],
    },
    {
      categoryId: 3,
      products: [8, 9, 10, 11],
    },
    {
      categoryId: 4,
      products: [1, 2, 3, 4],
    },
    {
      categoryId: 5,
      products: [5, 6, 7, 8],
    },
  ];
  const theMostPopularProductsForCategoryId = theMostPopularProductsSet.find(
    (set) => set.categoryId === categoryId
  )!.products;
  return getAllProductsByIds(theMostPopularProductsForCategoryId);
}

export function specialForYouProducts(): Product[] {
  const specialForYouProductsIds = [1, 2, 5, 6];
  return getAllProductsByIds(specialForYouProductsIds);
}

function getAllProductsByIds(productsIds: number[]): Product[] {
  return [...products].filter((product) => productsIds.includes(product.id));
}

export function getProductById(productId: number) {
  return [...products].find((product) => product.id === productId);
}

export function getProductTypeById(typeId: number): Type | undefined {
  return [...types].find((type) => type.id === typeId);
}

export function getAllProductsByTypeId(typeId: number): Product[] {
  return [...products].filter((product) => product.type_id === typeId);
}

export function getAllProductsByCategoryAndTypeId(
  categoryId: number,
  typeId: number
): Product[] {
  return [...products].filter(
    (product) =>
      product.category_id === categoryId && product.type_id === typeId
  );
}
