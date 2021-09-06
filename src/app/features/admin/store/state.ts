import { EntityState } from "@ngrx/entity";


export interface AdminData {
    adminData: string[]
}

export interface State extends EntityState<AdminData> {
    
}