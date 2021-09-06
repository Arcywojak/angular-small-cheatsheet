import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable()
export class ProductService {

  constructor() { }

  getAll(): Observable<Item[]> {
    return of([])
  }

  update() {

  }

  delete() {

  }

  add() {

  }
}
