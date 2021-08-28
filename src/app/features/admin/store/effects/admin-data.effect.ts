import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AdminServiceService } from "../../services/admin-service.service";
import * as adminDataActions from "../actions/admin-data.actions";
import {map, exhaustMap, catchError} from "rxjs/operators"
import { EMPTY, of } from "rxjs";

@Injectable()
export class AdminDataEffect {
    constructor(private adminAdminService: AdminServiceService, private actions$: Actions){}

    loadAdminData$ = createEffect(() => this.actions$.pipe(
        ofType(adminDataActions.loadAdminData),
        exhaustMap(() => this.adminAdminService.getAdminData().pipe(
            map(data => {
                return adminDataActions.adminDataLoadedSuccess({payload: data});
            }),
            catchError(err => EMPTY)
        ))
    ));

    addAdminDataItem$ = createEffect(() => this.actions$.pipe(
        ofType(adminDataActions.tryAddAdminData),
        exhaustMap((action: any) => of(action.itemToAdd).pipe(
            map(data => {
                console.log("From effect, ",data)
                return adminDataActions.addAdminDataSuccess({addedItem: data});
            }),
            catchError(err => EMPTY)
        ))
    ));
}