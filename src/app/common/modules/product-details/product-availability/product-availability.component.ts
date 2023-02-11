import { Component, Input, OnInit } from '@angular/core';
import { Coordinates } from 'src/app/common/defs/location.defs';
import { Product, ProductSize } from 'src/app/common/defs/product-defs';
import { Shop, ShopWithDistanceFromUser } from 'src/app/common/defs/shops.defs';
import { MapsService } from 'src/app/common/services/maps.service';
import { ShopsService } from 'src/app/common/services/shop.service';

@Component({
  selector: 'app-product-availability',
  templateUrl: './product-availability.component.html',
  styleUrls: ['./product-availability.component.scss'],
})
export class ProductAvailabilityComponent implements OnInit {
  @Input() product!: Product;
  @Input() userLocation!: Coordinates;

  protected shops!: ShopWithDistanceFromUser[];
  protected availableSizesInShops!: ProductSize[];

  constructor(
    private shopsService: ShopsService,
    private mapsService: MapsService
  ) {}

  ngOnInit() {
    this.initShopsListWithTransformations();
  }

  private initShopsListWithTransformations(): void {
    (this.shops as Shop[]) = this.getShopsWithAvailableProduct(this.product.id);
    this.shops = this.addDistanceFromUserToShop(this.shops);
    this.shops = this.sortByDistanceFromUser(this.shops);
  }

  private sortByDistanceFromUser(shops: ShopWithDistanceFromUser[]) {
    return shops.sort((a, b) => a.distanceFromUser - b.distanceFromUser);
  }

  private addDistanceFromUserToShop(shops: Shop[]): ShopWithDistanceFromUser[] {
    return shops.map((shop) => {
      return {
        ...shop,
        distanceFromUser: this.distanceBetweenTwoPointsOnMap(
          this.userLocation,
          shop.coordinates
        ),
      };
    });
  }

  private distanceBetweenTwoPointsOnMap(
    originPlace: Coordinates,
    destinationPlace: Coordinates
  ): number {
    return this.mapsService.distanceBetweenTwoPointsOnMap(
      originPlace,
      destinationPlace
    );
  }

  private getShopsWithAvailableProduct(productId: number): Shop[] {
    return this.shopsService.getShopsWithAvailableProduct(productId);
  }
}
