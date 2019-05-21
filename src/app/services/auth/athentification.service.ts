import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: firebase.User;

  constructor(
    private afAuth: AngularFireAuth,    
  ) {}

  loginGoogle() {
    console.log('Redirecting to Google login provider');
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }

  loginEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email);
  }

  register(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}