import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, RangeCustomEvent } from '@ionic/angular';
import { RangeValues } from 'src/app/common/defs/ion-components.defs';
import { FiltersValues } from './filter-modal.defs';

@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.component.html',
  styleUrls: ['./filters-modal.component.scss'],
})
export class FiltersModalComponent implements OnInit {
  protected priceFilterValues: RangeValues = { lower: 20, upper: 400 };
  protected filtersForm!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.filtersForm = this.formBuilder.group({
      sortOption: '',
      priceRange: { lower: 20, upper: 400 },
    });

    this.filtersForm.valueChanges.subscribe(({ priceRange }: FiltersValues) => {
      this.priceFilterValues = priceRange;
    });
  }

  protected onSave() {
    this.modalCtrl.dismiss(this.filtersForm.value, 'save');
  }

  protected onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}