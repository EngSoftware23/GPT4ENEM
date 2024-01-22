import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HeaderComponent } from './components/header/header.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { HighlightComponent } from './components/highlight/highlight.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    OurServicesComponent,
    HighlightComponent,
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class LandingPageModule { }
