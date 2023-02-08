import { HorizontalListItem } from 'src/app/common/modules/horizontal-list/horizontal-list.defs';

export class CategoriesListsModel {
  static getMostPopularProductsHorizontalModel(): HorizontalListItem {
    return {
      title: 'Najchętniej wybierane',
      firstLine: 'name',
      secondLine: 'price',
      imgUrl: 'imgUrl',
      imgAlt: 'name',
      isModal: true,
    };
  }
}
