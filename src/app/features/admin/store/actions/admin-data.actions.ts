import { createAction, props } from "@ngrx/store";

const LOAD_ADMIN_DATA = "[adminData] Load admin data";
const ADMIN_DATA_LOADED_SUCCESS = "[adminData] Admin data loaded success";
const ADMIN_DATA_LOADED_FAIL = "[adminData] Admin data loaded fail";
const TRY_ADD_ADMIN_DATA = "[adminData] try add Admin data"
const ADD_ADMIN_DATA_SUCCESS = "[adminData] add Admin data success"

export const loadAdminData = createAction(
    LOAD_ADMIN_DATA
)

export const adminDataLoadedSuccess = createAction(
    ADMIN_DATA_LOADED_SUCCESS,
    props<{payload: any[]}>()
)

export const adminDataLoadedFail = createAction(
    ADMIN_DATA_LOADED_FAIL
)

export const tryAddAdminData = createAction(
    TRY_ADD_ADMIN_DATA,
    props<{itemToAdd: any}>()
)

export const addAdminDataSuccess = createAction(
    ADD_ADMIN_DATA_SUCCESS,
    props<{addedItem: any}>()
)