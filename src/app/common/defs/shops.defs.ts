import { ProductSize } from './product-defs';

export interface Shop {
  name: string;
  city: string;
  postCode: string;
  street: string;
  buildingNumber: number;
  workHoursWeek: string;
  workHoursSunday: string;
  products: AvailableProduct[];
}

interface AvailableProduct {
  id: number;
  availableSizes: ProductSize[];
}
