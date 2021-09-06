import { Item } from "../models/item.model";

export interface ItemsData {
    items: Item[],
    isLoading: boolean,
    errorMessage: string | null
}

export interface State {
    itemsData: ItemsData
}

export const initialState: ItemsData = {
    items: [],
    isLoading: false,
    errorMessage: null
}