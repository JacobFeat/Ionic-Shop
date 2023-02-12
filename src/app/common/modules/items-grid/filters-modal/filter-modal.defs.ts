import { FormControl } from '@angular/forms';
import { RangeValues } from 'src/app/common/defs/ion-components.defs';

export interface FiltersValues {
  sortOption: SortOption;
  priceRange: RangeValues;
}

export type SortOption = 'priceAsc' | 'priceDesc' | 'nameAsc' | 'nameDesc' | '';
