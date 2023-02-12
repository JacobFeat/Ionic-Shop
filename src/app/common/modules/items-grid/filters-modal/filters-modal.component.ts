import { Component, OnInit } from '@angular/core';
import { ModalController, RangeCustomEvent } from '@ionic/angular';
import { RangeValues } from 'src/app/common/defs/ion-components.defs';

@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.component.html',
  styleUrls: ['./filters-modal.component.scss'],
})
export class FiltersModalComponent implements OnInit {
  protected priceFilterValues: RangeValues = { lower: 20, upper: 400 };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  protected onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  protected onIonRangeChange(ev: Event): void {
    this.priceFilterValues = (ev as RangeCustomEvent).detail
      .value as RangeValues;
    console.log(this.priceFilterValues);
  }
}
