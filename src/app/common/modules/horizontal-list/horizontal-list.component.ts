import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Product } from '../../defs/product-defs';
import { products } from '../../mocks/products';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
})
export class HorizontalListComponent implements OnInit {
  @Input() type: 'square' | 'circle' = 'square';

  config: SwiperOptions = {
    slidesPerView: 2.5,
  };

  protected products: Product[] = products;

  constructor() {}

  ngOnInit() {
    this.setConfigByType();
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
