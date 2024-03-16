import { Injectable } from '@angular/core';
import { error } from 'console';
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private auth = getAuth();
  private googleProvider = new GoogleAuthProvider();
  private microsoftProvider = new OAuthProvider('microsoft.com');
  private facebookProvider = new FacebookAuthProvider()

  constructor() { }

  createUserWithEmailAndPasswordForms(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
  }

  signInWithEmailAndPasswordForms(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors
      });
  }

  signInWithGoogle(): Promise<void> {
    return signInWithPopup(this.auth, this.googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
        }
        const user = result.user;
        console.log(user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // Handle errors
      });
  }

  signInWithMicrosoft():Promise<void> {
    return signInWithPopup(this.auth, this.microsoftProvider) 
      .then((result) => {
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.
    
        // Get the OAuth access token and ID Token
        const credential = OAuthProvider.credentialFromResult(result);
        if (credential) {
          const accessToken = credential.accessToken;
          const idToken = credential.idToken;
        }
        const user = result.user;
        console.log(user)
      
      })
      .catch((error) => {
        // Handle error.
      });
  }

  signInWithFacebook():Promise<void> {
    return signInWithPopup(this.auth, this.facebookProvider)
    .then((result) => {
      const user = result.user;
      console.log(user)

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      if (credential) {
        const accessToken = credential.accessToken;
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
    })
  }
}