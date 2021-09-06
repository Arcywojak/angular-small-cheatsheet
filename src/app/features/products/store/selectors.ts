import { createSelector } from "@ngrx/store";
import { Item } from "../models/item.model";
import { ItemsData, State } from "./state";


export const selectItems = createSelector(
    (state: ItemsData) => state.items,
    (items: Item[]) => items
)
export const selectError = createSelector(
    (state: ItemsData) => state.errorMessage,
    (errorMessage: string | null) => errorMessage
)
export const selectIsLoading = createSelector(
    (state: ItemsData) => state.isLoading,
    (isLoading: boolean) => isLoading
)