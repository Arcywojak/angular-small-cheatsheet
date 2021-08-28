import { Action, createReducer, on } from '@ngrx/store';
import * as adminDataActions from '../actions/admin-data.actions';

const initialState = ["no", "data"];

export const reducer = createReducer(
    initialState,
    on(adminDataActions.loadAdminData, (state) => {
        return state;
    }),
    on(adminDataActions.adminDataLoadedSuccess, (state, {payload}) => {
        return payload;
    }),
    on(adminDataActions.tryAddAdminData, (state, {itemToAdd}) => {
        return state;
    }),
    on(adminDataActions.addAdminDataSuccess, (state, {addedItem}) => {
        return [...state, addedItem];
    })
)

export function adminDataReducer(state: any, action: any) {
    return reducer(state, action);
}