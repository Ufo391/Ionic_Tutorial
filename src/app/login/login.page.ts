import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from '../util/alert.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AngularFireAuth]
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  loginEmail() {
    // this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    // Bei Erfolg umleiten
    this.router.navigate(['/teams']);
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  private clearInputs() {
    this.email = '';
    this.password = '';
  }

  // Hilfsmethoden
  private validateUserInputs() {
    if ((this.email.length > 0 && this.password.length > 0) === false) {
      this.alertService.errorEmptyInputs();
      return false;
    }

    return true;
  }

  // Events

  private OnLoginButtonClick() {
    if (this.validateUserInputs() === true) {
      this.loginEmail();
      this.clearInputs();
    }
  }
}
