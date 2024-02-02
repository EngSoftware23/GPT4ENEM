import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from './service-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ServiceFormComponent } from './sections/service-form/service-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceResultComponent } from './sections/service-result/service-result.component';



@NgModule({
  declarations: [
    ServicePageComponent,
    ServiceFormComponent,
    ServiceResultComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class ServicePageModule { }
