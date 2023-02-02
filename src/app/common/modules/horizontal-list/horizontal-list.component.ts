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

  config: SwiperOptions = {
    slidesPerView: 2.5,
  };

  constructor() {}

  ngOnInit() {
    this.setConfigByType();
    console.log(this.listItems);
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
