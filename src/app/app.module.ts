import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ComponentsModule } from './components/components.module';
import { RegisterModule } from './pages/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    RegisterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
