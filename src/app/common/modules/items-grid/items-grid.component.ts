import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from '../../defs/product-defs';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent implements OnInit {
  @Input() products!: Product[];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  protected openModal(item: any): void {
    if (ProductDetailsComponent) {
      this.modalCtrl
        .create({
          component: ProductDetailsComponent,
          componentProps: { product: item },
        })
        .then((modalEl) => {
          modalEl.present();
        });
    }
  }
}
