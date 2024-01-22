import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowToTopComponent } from './arrow-to-top/arrow-to-top.component';



@NgModule({
  declarations: [
    ArrowToTopComponent
  ],
  exports: [
    ArrowToTopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
