import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

 

  @Input() type: string = '';
  email: string = '';
  pswd: string = '';
  pswdConfirm: string = '';


  onSubmit() {

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