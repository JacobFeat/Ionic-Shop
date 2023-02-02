export interface Category {
  id: number;
  name: string;
}

export type CategoryKeys = keyof Category;

// TODO undefined?
export interface CategoryForYou {
  categoryName: string | undefined;
  typeName: string | undefined;
  imgUrl: string | undefined;
}
