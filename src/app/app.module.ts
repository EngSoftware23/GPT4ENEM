import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './pages/login/login.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule, 
    LandingPageModule,
    LayoutModule,
    ComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
