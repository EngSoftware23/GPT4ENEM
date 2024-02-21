import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form/auth-form.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

import { ArrowToTopComponent } from './arrow-to-top/arrow-to-top.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { LinkComponent } from './link/link.component';




@NgModule({
  declarations: [
    AuthFormComponent,
    ButtonComponent
  ],
  exports: [
    AuthFormComponent,
    ButtonComponent,
    ArrowToTopComponent,
    ParagraphComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ArrowToTopComponent,
    ParagraphComponent,
    LinkComponent
  ]
})
export class ComponentsModule { }
