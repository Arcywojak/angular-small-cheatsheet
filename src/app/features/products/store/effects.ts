import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, delay, exhaustMap, map } from "rxjs/operators";
import { ProductService } from "../services/product.service";
import * as ProductActions from './actions';

@Injectable()
export class ItemEffect {
    constructor(private productService: ProductService, private $actions: Actions){}

    loadItems$ = createEffect(() => this.$actions.pipe(
        ofType(ProductActions.loadDataRequest),
        exhaustMap(() => this.productService.getAll().pipe(
            delay(3000),
            map(items => {
                return ProductActions.loadSuccess({items})
            }),
            catchError(err => {
                console.log("I FAILED")
                return of(ProductActions.loadFail({errorMessage: 'err'}));
            })
        ))
    ))
}