import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AlertService} from '../util/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [AngularFireAuth]
})
export class RegisterPage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  mail: string = '';
  password: string = '';
  passwordCheck: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, private alertService: AlertService) {}

  ngOnInit() {}

  register() {
    if (this.checkInputs() === true) {
      this.transferData();
      this.router.navigate(['/login']);
    }
  }

  private transferData() {
    // this.afAuth.auth.createUserWithEmailAndPassword(this.mail, this.password);
    this.clearInputs();
  }

  private clearInputs() {
    this.firstName = '';
    this.lastName = '';
    this.mail = '';
    this.password = '';
    this.passwordCheck = '';
  }

  private checkInputs() {
    if (this.validateUserInputs() === true) {
      return this.validatePasswords();
    }
    return false;
  }

  private validateUserInputs() {
    if (
      (this.firstName.length > 0 &&
        this.lastName.length > 0 &&
        this.mail.length > 0 &&
        this.password.length > 0 &&
        this.passwordCheck.length > 0) === false
    ) {
      this.alertService.errorEmptyInputs();
      return false;
    }

    return true;
  }

  private validatePasswords() {
    if (this.password !== this.passwordCheck) {
      this.alertService.errorUnequalPasswordInputs();
      return false;
    }

    return true;
  }
}
