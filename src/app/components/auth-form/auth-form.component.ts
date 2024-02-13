import {  SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Input() type: string = '';
  email: string = '';
  pswd: string = '';
  pswdConfirm: string = '';


  constructor( private authService:SocialAuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.router.navigate(['service-page']);
      }
    });
  }


 

  onSubmit(event: Event) {

    event.preventDefault();

      if (this.type === "Cadastro") {
        if (this.pswd != this.pswdConfirm) {
          alert('Senhas Diferentes')
          this.pswd = '';
          this.pswdConfirm = '';

        } else  {
          const userData = {
            email: this.email,
            pswd: this.pswd
          }
        }

      } else if (this.type === "Login") {
        const userData = {
          email: this.email,
          pswd: this.pswd
        }  
      }
  }
}