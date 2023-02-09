import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Product } from '../../defs/product-defs';
import { ActionSheetButtonsModel } from './product-details.defs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: Product | undefined;

  protected size!: number;

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Wybierz rozmiar',
      buttons: this.getAvailableSizesModel(this.product),
    });

    await actionSheet.present();
    const result = await actionSheet.onDidDismiss();

    if (result.role === 'setSize') {
      this.size = result.data.size;
    }
  }

  private getAvailableSizesModel(
    product: Product | undefined
  ): ActionSheetButtonsModel[] {
    const model: ActionSheetButtonsModel[] = [];
    model.push(this.getCancelButton());
    model.push(...this.getAvailableSizesButtons(product));
    return model;
  }

  private getCancelButton(): ActionSheetButtonsModel {
    return {
      text: 'Anuluj',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    };
  }

  private getAvailableSizesButtons(
    product: Product | undefined
  ): ActionSheetButtonsModel[] {
    const availableSizesButtons: ActionSheetButtonsModel[] = [];
    product?.availableSizes.forEach((size) =>
      availableSizesButtons.push({
        text: size,
        role: 'setSize',
        data: {
          size: size,
        },
      })
    );
    return availableSizesButtons;
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
