import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RangeValues } from '../../defs/ion-components.defs';
import { Product } from '../../defs/product-defs';
import { ProductDetailsModal } from '../product-details/product-details.modal';
import { FiltersValues, SortOption } from './filters-modal/filter-modal.defs';
import { FiltersModalComponent } from './filters-modal/filters-modal.component';
import { FiltersService } from './filters.service';
import { SortByProperties } from './items-grid.defs';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent extends ProductDetailsModal implements OnInit {
  @Input() products!: Product[];

  private filtersValues!: FiltersValues;
  private initialProducts!: Product[];

  constructor(
    modalCtrl: ModalController,
    private filtersService: FiltersService
  ) {
    super(modalCtrl);
  }

  ngOnInit() {
    this.makeCopyOfInitialProducts();
    this.filtersValues = this.getInitialFiltersValues();
  }

  protected async openFiltersModal() {
    const modal = await this.modalCtrl.create({
      component: FiltersModalComponent,
      componentProps: { filtersValues: this.filtersValues },
    });
    modal.present();

    const modalData = await modal.onWillDismiss();
    this.filtersValues = modalData.data;
    const { role } = modalData;

    role === 'save' && this.filterProducts();
    role === 'reset' && this.resetFilters();
  }

  private filterProducts(): void {
    this.filterProductByPriceRange(this.filtersValues.priceRange);
    if (this.filtersValues.sortOption)
      this.sortProducts(this.filtersValues.sortOption);
  }

  private resetFilters(): void {
    this.resetProductsToInitialState();
    this.filtersValues = this.getInitialFiltersValues();
  }

  private sortProducts(sortValue: SortOption): void {
    this.products = this.filtersService.sortProducts(this.products, sortValue);
  }

  private filterProductByPriceRange(priceRange: RangeValues): void {
    this.products = [...this.initialProducts].filter(
      (product) =>
        product.price > priceRange.lower && product.price < priceRange.upper
    );
  }

  private makeCopyOfInitialProducts(): void {
    this.initialProducts = [...this.products];
  }

  private resetProductsToInitialState(): void {
    this.products = this.initialProducts;
  }

  private getInitialFiltersValues(): FiltersValues {
    return {
      priceRange: { lower: 20, upper: 400 },
      sortOption: '',
    };
  }
}
