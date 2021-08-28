import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';

const routes: Routes = [
  {
    path: "", component: AdminHomeComponent, children: [
      {
        path: "", component: AdminOverviewComponent, //outlet: "admin"
      },
      {
        path: "users", component: AdminUserListComponent, //outlet: "admin"
      },
      {
        path: "reports", component: AdminReportsComponent, //outlet: "admin"
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
