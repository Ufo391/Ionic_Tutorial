import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert/alert.service';
import { AuthService } from '../services/auth/athentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: firebase.User;

  email = '';
  resetMail = '';
  password = '';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  navigateToTeamsPage() {
    if (this.user) {
      this.clearInputs();
      this.router.navigate(['/teams']);
    }
  }

  setCurrentUser() {
    this.authService.getLoggedInUser().subscribe(
      user => {
        console.log(user);
        this.user = user;
      }
    );
  }

  loginEmail() {
    this.authService.loginEmail(this.email, this.password);
    this.navigateToTeamsPage();
  }

  loginGoogle() {
    this.authService.loginGoogle();
    this.navigateToTeamsPage();
  }

  logout() {
    this.authService.logout();
  }

  resetPassword() {
    this.authService.resetPassword(this.resetMail);
  }

  // Hilfsmethoden

  private clearInputs() {
    this.email = '';
    this.password = '';
  }

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
    }
  }
}
