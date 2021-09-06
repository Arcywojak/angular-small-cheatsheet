import { Action, createReducer, on } from "@ngrx/store";
import { initialState, ItemsData, State } from "./state";
import * as ItemsActions from './actions';


export const reducer = createReducer(
    initialState,
    on(ItemsActions.loadDataRequest, state => {
        return {
            ...state,
            isLoading: true,
            errorMessage: null
        }
    }),
    on(ItemsActions.loadSuccess, (state, payload) => {
        return {
            items: payload.items,
            isLoading: false,
            errorMessage: null
        }
    }),
    on(ItemsActions.loadFail, (state, payload) => {
        return {
            ...state,
            isLoading: false,
            errorMessage: payload.errorMessage
        }
    })
)

export function itemsReducer(state: ItemsData | undefined, action: Action) {
    console.log("I WORK")
    return reducer(state, action);
}