import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
