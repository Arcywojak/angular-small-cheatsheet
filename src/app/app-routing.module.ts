import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAdminPermissionPageComponent } from './constant-components/no-admin-permission-page/no-admin-permission-page.component';
import { PageNotFoundComponent } from './constant-components/page-not-found/page-not-found.component';
import { CanAdminLoadActivatedGuard } from './core/guards/admin-can-activate/can-admin-load-activated.guard';
import { CanAdminLoadGuard } from './core/guards/admin-can-load/can-admin-load.guard';
import { ContactPageComponent } from './features/contact/contact-page/contact-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "contact", component: ContactPageComponent
  },
  {
    path: "admin", 
    loadChildren:() => import("./features/admin/admin.module").then(m => m.AdminModule),
    canLoad: [CanAdminLoadGuard]
    //canActivate:[CanAdminLoadActivatedGuard]
  },
  {
    path: "products",
    loadChildren: () => import("./features/products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "no-admin-permission", component: NoAdminPermissionPageComponent
  },
  {
    path:"**", component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
