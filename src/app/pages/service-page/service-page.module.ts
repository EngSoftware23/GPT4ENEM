
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from './service-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ServicePageComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ServicePageModule { }
