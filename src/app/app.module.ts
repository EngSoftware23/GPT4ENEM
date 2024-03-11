import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './pages/login/login.module';
import { ServicePageModule } from './pages/service-page/service-page.module';
import { LayoutModule } from './layout/layout.module';


import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { environment } from 'src/environments/environment';


const firebaseConfig = {
  apiKey: environment.API_KEY_FIREBASE,
  authDomain: environment.AUTH_DOMAIN,
  projectId: environment.PROJECT_ID,
  storageBucket: environment.STORAGE_BUCKET,
  messagingSenderId: environment.MESSAGING_SENDER_ID,
  appId: environment.APP_ID
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    LoginModule,
    ServicePageModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
