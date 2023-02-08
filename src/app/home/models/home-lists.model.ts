import { HorizontalListItem } from 'src/app/common/modules/horizontal-list/horizontal-list.defs';

export class HomeListsModel {
  static getProductsHorizontalModel(): HorizontalListItem {
    return {
      title: 'Specjalnie dla Ciebie',
      firstLine: 'name',
      secondLine: 'price',
      imgUrl: 'imgUrl',
      imgAlt: 'name',
      isModal: true,
    };
  }

  static getCategoriesForYouHorizontalModel(): HorizontalListItem {
    return {
      title: 'Kategorie dla Ciebie',
      firstLine: 'categoryName',
      secondLine: 'typeName',
      imgUrl: 'imgUrl',
      imgAlt: 'name',
      routing: [
        { pathName: 'categories', idName: 'categoryId' },
        { pathName: 'product-types', idName: 'typeId' },
      ],
    };
  }
}
