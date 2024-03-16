import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthFormComponent
  ],

  exports: [
    AuthFormComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
