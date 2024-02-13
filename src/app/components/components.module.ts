import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { GoogleSigninButtonModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AuthFormComponent,
    ButtonComponent
  ],
  exports: [
    AuthFormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_KEY
            )
          }
        ],
        onError: (error) => {
          console.error(error);
        }
      } as SocialAuthServiceConfig,}
  ]
})
export class ComponentsModule { }
