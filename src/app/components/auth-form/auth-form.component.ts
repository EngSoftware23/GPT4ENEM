import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss','./auth-form-responsive.scss']
})

export class AuthFormComponent implements OnInit {

  @Input() type: string = '';
  email: string = '';
  pswd: string = '';
  pswdConfirm: string = '';
  authForm: FormGroup;


  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder ) { 
    this.authForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pswd: ['', [Validators.required, Validators.minLength(6)]],
      pswdConfirm: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    const emailControl = this.authForm.get('email');
    const passwordControl = this.authForm.get('password');

    if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;

        if (this.type === 'Cadastro') {
            this.createUserWithEmailAndPassword(email, password);
        } else if (this.type === 'Login') {
            this.signInWithEmailAndPassword(email, password);
        }
    } else {
        console.error('Os controles de e-mail ou senha estão indefinidos.');
    }
  }


  createUserWithEmailAndPassword(email: string, password: string): void {
      this.authService.createUserWithEmailAndPasswordForms(email, password)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error(error)
      });
  }

  signInWithEmailAndPassword(email: string, password: string): void {
    this.authService.signInWithEmailAndPasswordForms(email, password)
    .then(() => {
      this.router.navigate(['/service-page']);
    })
    .catch((error) => {
      console.error(error)
    });

  }

  signInWithGoogle(): void {
    this.authService.signInWithGoogle()
      .then(() => {
        this.router.navigate(['/service-page']);
      })
      .catch((error) => {
        console.error(error)
      });
  }

  signInWithMicrosoft(): void {
    this.authService.signInWithMicrosoft()
    .then(() => {
      this.router.navigate(['/service-page']);
    })
    .catch((error) => {
      console.error(error)
    })
  }

  signInWithFacebook(): void {
    this.authService.signInWithFacebook()
    .then(() => {
      this.router.navigate(['/service-page']);
    })
    .catch((error) => {
      console.error(error)
    })
  }

}
