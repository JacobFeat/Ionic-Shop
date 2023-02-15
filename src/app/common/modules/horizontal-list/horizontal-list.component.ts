import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { HorizontalListItem } from './horizontal-list.defs';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
})
export class HorizontalListComponent implements OnInit {
  @Input() type: 'square' | 'circle' = 'square';
  @Input() listModel!: HorizontalListItem;
  @Input() listItems!: any[];
  @Input() modalComponent!: any;
  @Input() titleInput!: string;
  
  protected routerLink!: string;

  config: SwiperOptions = {
    slidesPerView: 2.5,
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.setConfigByType();
  }

  protected routeInListModelExists(): boolean {
    return !!this.listModel.routing?.length;
  }

  protected setRouterPath(item: any): string {
    let route = '';
    this.listModel.routing?.forEach((path) => {
      route += `${path.pathName}/${item[path.idName]}/`;
    });
    return route;
  }

  protected openModal(item: any): void {
    if (this.listModel.isModal && this.modalComponent) {
      this.modalCtrl
        .create({
          component: this.modalComponent,
          componentProps: { product: item },
        })
        .then((modalEl) => {
          modalEl.present();
        });
    }
  }

  private setConfigByType() {
    if (this.type === 'circle') {
      this.config.slidesPerView = 3.5;
      this.config.spaceBetween = 26;
    }
    if (this.type === 'square') {
      this.config.spaceBetween = 11;
    }
  }
}
