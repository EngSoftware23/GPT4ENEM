import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowToTopComponent } from './arrow-to-top/arrow-to-top.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [
    ArrowToTopComponent,
    ParagraphComponent,
    LinkComponent
  ],
  exports: [
    ArrowToTopComponent,
    ParagraphComponent,
    LinkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
