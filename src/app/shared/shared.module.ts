import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCircleComponent } from './components/custom-circle/custom-circle.component';



@NgModule({
  declarations: [
    CustomCircleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCircleComponent
  ]
})
export class SharedModule { }
