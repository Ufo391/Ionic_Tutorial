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

  email: string = '';
  resetMail: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) {    
    this.setCurrentUser();
  }

  ngOnInit() { }

  navigateToTeamsPage() {    
    this.clearInputs();
    this.router.navigate(['/teams'])
  }

  setCurrentUser() {
    this.authService.getLoggedInUser().subscribe(
      user => {
        console.log(user);        
        this.navigateToTeamsPage();
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

  clearInputs() {
    this.email = '';
    this.password = '';
    this.resetMail = '';
  }

  validateUserInputs() {
    if ((this.email.length > 0 && this.password.length > 0) === false) {
      this.alertService.errorEmptyInputs();
      return false;
    }

    return true;
  }

  // Events

  OnLoginButtonClick() {
    if (this.validateUserInputs() === true) {
      this.loginEmail();
    }
  }
}
