import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from '../../defs/product-defs';
import { ProductDetailsModal } from '../product-details/product-details.modal';
import { FiltersModalComponent } from './filters-modal/filters-modal.component';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent extends ProductDetailsModal implements OnInit {
  @Input() products!: Product[];

  constructor(modalCtrl: ModalController) {
    super(modalCtrl);
  }

  ngOnInit() {}

  protected openFiltersModal(): void {
    this.modalCtrl
      .create({
        component: FiltersModalComponent,
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
