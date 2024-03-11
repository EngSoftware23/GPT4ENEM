import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthFormComponent,
    ButtonComponent
  ],
  exports: [
    AuthFormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  
})
export class ComponentsModule { }
