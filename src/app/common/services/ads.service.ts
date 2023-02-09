import { Injectable } from '@angular/core';
import { Ad } from '../defs/ad.defs';
import { ads, getAdByCategoryId } from '../mocks/database';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  get ads(): Ad[] {
    return ads;
  }

  getAdByCategoryId(categoryId: number): Ad | undefined {
    return getAdByCategoryId(categoryId);
  }
}
