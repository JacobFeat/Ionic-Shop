import { CategoryKeys } from 'src/app/common/defs/category.defs';
import { Product, ProductKeys } from 'src/app/common/defs/product-defs';
import { HorizontalListItem } from 'src/app/common/modules/horizontal-list/horizontal-list.defs';

export class HomeListsModel {
  static getProductsHorizontalModel(): HorizontalListItem {
    return {
      title: 'Specjalnie dla Ciebie',
      firstLine: 'name',
      secondLine: 'price',
      imgUrl: 'imgUrl',
      imgAlt: 'name',
      route: 'categories',
      idName: 'category_id',
      secondRoute: 'product-types',
      secondIdName: 'type_id',
      thirdRoute: 'product-details',
      thirdIdName: 'id',
    };
  }

  static getCategoriesForYouHorizontalModel(): HorizontalListItem {
    return {
      title: 'Kategorie dla Ciebie',
      firstLine: 'categoryName',
      secondLine: 'typeName',
      imgUrl: 'imgUrl',
      imgAlt: 'name',
      route: 'categories',
      idName: 'categoryId',
      secondRoute: 'product-types',
      secondIdName: 'typeId',
    };
  }
}
