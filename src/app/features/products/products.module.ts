import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductService } from './services/product.service';
import { ProductsRoutingModule } from './products.routing';
import { itemsReducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffect } from './store/effects';



@NgModule({
  declarations: [
    ProductsHomeComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature("itemsData", itemsReducer),
    EffectsModule.forFeature([ItemEffect])
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
