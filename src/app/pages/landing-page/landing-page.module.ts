import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HeaderComponent } from './components/header/header.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    OurServicesComponent,
    HighlightComponent,
    BenefitsComponent,
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
  ]
})
export class LandingPageModule { }
