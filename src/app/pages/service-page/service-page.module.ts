import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from './service-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ServiceFormComponent } from './sections/service-form/service-form.component';



@NgModule({
  declarations: [
    ServicePageComponent,
    ServiceFormComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class ServicePageModule { }
