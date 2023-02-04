import { Injectable } from '@angular/core';
import { Ad } from '../defs/ad.defs';
import { ads } from '../mocks/database';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  get ads(): Ad[] {
    return ads;
  }
}
