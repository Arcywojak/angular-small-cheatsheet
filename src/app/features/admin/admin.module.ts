import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminServiceService } from './services/admin-service.service';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AdminDataState, effects, reducers } from './store';
import * as AdminDataActions from './store/actions/admin-data.actions';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminDataInterceptor } from './interceptors/admin-data.interceptor';
import { RootInterceptor } from 'src/app/core/interceptors/root.interceptor';

@NgModule({
  declarations: [
    AdminOverviewComponent,
    AdminUserListComponent,
    AdminReportsComponent,
    AdminHomeComponent,
    AdminNavComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatTabsModule,
    HttpClientModule,
    StoreModule.forFeature("adminData", reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [
    AdminServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: AdminDataInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: RootInterceptor, multi: true}
  ],
})
export class AdminModule { }

