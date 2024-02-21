
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

declare global {
  interface Window { handleCredentialResponse: (response: any) => void; }
}


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

  decodeJwtResponse(credential: string): any {
    
    const decodedToken = jwtDecode(credential);
    
    return decodedToken;
  }


  ngOnInit(): void {
    window.handleCredentialResponse = (response) => {
      
        const responsePayload = this.decodeJwtResponse(response.credential);

        console.log("ID: " + responsePayload.sub);
        console.log('Full Name: ' + responsePayload.name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);
    };
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