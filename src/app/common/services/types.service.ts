import { Injectable } from '@angular/core';
import { Type } from '../defs/type.defs';
import { getAvailableTypesInCategory } from '../mocks/database';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor() {}

  getAvailableTypesInCategory(categoryId: number): Type[] {
    return getAvailableTypesInCategory(categoryId);
  }
}
