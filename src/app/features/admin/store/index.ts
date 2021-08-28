import { ActionReducerMap } from "@ngrx/store";
import { AdminDataEffect } from "./effects/admin-data.effect";
import { adminDataReducer } from "./reducers/admin-data.reducer";


export interface AdminDataState {
    adminData: any
}

export const reducers: ActionReducerMap<AdminDataState> = {
    adminData: adminDataReducer
}

export const effects: any = [AdminDataEffect];