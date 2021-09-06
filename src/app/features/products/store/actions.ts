import { createAction, props } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Item } from "../models/item.model";


export enum ActionTypes {
    LOAD_DATA_REQUEST = '[items] load items request',
    LOAD_SUCCESS = '[items] load items success',
    LOAD_FAIL = '[items] load items fail'
}

export const loadDataRequest = createAction(ActionTypes.LOAD_DATA_REQUEST);

export const loadSuccess = createAction(
    ActionTypes.LOAD_SUCCESS,
    props<{items: Item[]}>()
)

export const loadFail = createAction(
    ActionTypes.LOAD_FAIL,
    props<{errorMessage: string | null}>()
)
