import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Category, CategoryKeys } from '../../defs/category.defs';
import { Product, ProductKeys } from '../../defs/product-defs';
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
  protected routerLink!: string;

  config: SwiperOptions = {
    slidesPerView: 2.5,
  };

  constructor() {}

  ngOnInit() {
    this.setConfigByType();
  }

  protected routeInListModelExists(): boolean {
    return !!this.listModel.route;
  }

  protected setRouterPath(item: any): string {
    let routerPath = '';
    routerPath += this.setFirstPartOfRouterPath(item);
    routerPath += this.setSecondPartOfRouterPath(item);
    routerPath += this.setThirdPartOfRouterPath(item);
    return routerPath;
  }

  private setFirstPartOfRouterPath(item: any): string {
    if (this.listModel.idName) {
      return `${this.listModel.route}/${item[this.listModel.idName]}`;
    }
    return '';
  }

  private setSecondPartOfRouterPath(item: any): string {
    if (this.listModel.secondIdName) {
      return `/${this.listModel.secondRoute}/${
        item[this.listModel.secondIdName]
      }`;
    }
    return '';
  }
  private setThirdPartOfRouterPath(item: any): string {
    if (this.listModel.thirdIdName) {
      return `/${this.listModel.thirdRoute}/${
        item[this.listModel.thirdIdName]
      }`;
    }
    return '';
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
