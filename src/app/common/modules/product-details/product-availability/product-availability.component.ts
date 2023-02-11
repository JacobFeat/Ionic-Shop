import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/common/defs/product-defs';
import { Shop } from 'src/app/common/defs/shops.defs';
import { ShopsService } from 'src/app/common/services/shop.service';

@Component({
  selector: 'app-product-availability',
  templateUrl: './product-availability.component.html',
  styleUrls: ['./product-availability.component.scss'],
})
export class ProductAvailabilityComponent implements OnInit {
  @Input() product!: Product;

  protected shops!: Shop[];
  protected availableSizesInShops!: any;

  constructor(
    private modalCtrl: ModalController,
    private shopsService: ShopsService
  ) {}

  ngOnInit() {
    this.shops = this.getShopsWithAvailableProduct(this.product.id);
    console.log(this.shops);
  }

  private getShopsWithAvailableProduct(productId: number): Shop[] {
    return this.shopsService.getShopsWithAvailableProduct(productId);
  }
}
