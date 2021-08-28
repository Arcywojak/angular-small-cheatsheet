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
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
