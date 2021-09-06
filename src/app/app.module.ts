import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './features/contact/contact-page/contact-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { PageNotFoundComponent } from './constant-components/page-not-found/page-not-found.component';
import { HeaderComponent } from './constant-components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoAdminPermissionPageComponent } from './constant-components/no-admin-permission-page/no-admin-permission-page.component';
import { AboutUsPageComponent } from './features/about-us/about-us-page/about-us-page.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RootInterceptor } from './core/interceptors/root.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HeaderComponent,
    HomePageComponent,
    PageNotFoundComponent,
    NoAdminPermissionPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RootInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
