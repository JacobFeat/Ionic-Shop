import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, RangeCustomEvent } from '@ionic/angular';
import { UnsubscribeComponent } from 'src/app/common/components/unsubscribe/unsubscribe.component';
import { RangeValues } from 'src/app/common/defs/ion-components.defs';
import { FiltersValues } from './filter-modal.defs';

@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.component.html',
  styleUrls: ['./filters-modal.component.scss'],
})
export class FiltersModalComponent
  extends UnsubscribeComponent
  implements OnInit
{
  protected filtersForm!: FormGroup;

  @Input() filtersValues!: FiltersValues;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.filtersForm = this.formBuilder.group({
      sortOption: this.filtersValues.sortOption,
      priceRange: this.filtersValues.priceRange,
    });

    this.registerSub(
      this.filtersForm.valueChanges.subscribe(
        ({ priceRange }: FiltersValues) => {
          this.filtersValues.priceRange = priceRange;
        }
      )
    );
  }

  protected onSave() {
    this.modalCtrl.dismiss(this.filtersForm.value, 'save');
  }

  protected onReset() {
    this.modalCtrl.dismiss(null, 'reset');
  }

  protected onCancel() {
    this.modalCtrl.dismiss(this.filtersForm.value, 'cancel');
  }
}
