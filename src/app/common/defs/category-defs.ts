export interface Category {
  name: string;
  sex: string;
  imgUrl: string;
  altUrl?: string;
}

export type CategoryKeys = keyof Category;
