import { Component, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from '../../defs/product-defs';
import { ProductDetailsComponent } from './product-details.component';

@Injectable()
export class ProductDetailsModal {
  modalCtrl: ModalController;
  constructor(modalCtrl: ModalController) {
    this.modalCtrl = modalCtrl;
  }

  protected openModal(product: Product): void {
    if (ProductDetailsComponent) {
      this.modalCtrl
        .create({
          component: ProductDetailsComponent,
          componentProps: { product: product },
        })
        .then((modalEl) => {
          modalEl.present();
        });
    }
  }
}
