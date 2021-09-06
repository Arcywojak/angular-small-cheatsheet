import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsStoreActions, ItemsStoreSelectors } from '../store';
import { ItemsData, State } from '../store/state';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent implements OnInit {

  itemsData$: Observable<ItemsData>;
  items$: Observable<Item[]>;
  isLoading$: Observable<boolean>;
  errorMsg$: Observable<string | null>;

  constructor(private store: Store<State>) {
    this.itemsData$ = this.store.select("itemsData");

    this.items$ = this.itemsData$.pipe(select(ItemsStoreSelectors.selectItems));
    this.isLoading$ = this.itemsData$.pipe(select(ItemsStoreSelectors.selectIsLoading));
    this.errorMsg$ = this.itemsData$.pipe(select(ItemsStoreSelectors.selectError));

   }

  ngOnInit(): void {
    this.store.dispatch(ItemsStoreActions.loadDataRequest());

    this.store.select("itemsData").pipe(select(ItemsStoreSelectors.selectError)).subscribe(e => console.log(e))
  }

}
