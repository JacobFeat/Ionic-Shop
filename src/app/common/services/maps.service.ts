import { Injectable } from '@angular/core';
import { Coordinates } from '../defs/location.defs';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  distanceBetweenTwoPointsOnMap(
    originPlace: Coordinates,
    destinationPlace: Coordinates
  ): number {
    const { latitude: lat1, longitude: lon1 } = originPlace;
    const { latitude: lat2, longitude: lon2 } = destinationPlace;
    const R = 6371;
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    if (d > 10) return Number(d.toFixed(0));
    return Number(d.toFixed(2));
  }

  private deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }
}
