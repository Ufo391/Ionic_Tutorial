import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert/alert.service";
import { AuthService } from "../../services/auth/athentification.service";
import { ApiService } from 'src/app/services/api/api.service';
import { LoginResponse } from 'src/app/responses/response.interfaces';
import { User } from '../../model/user.model';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email: string = "";
  resetMail: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService,
    private apiService: ApiService
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    // Event
    this.setCurrentUser();
  }

  navigateToTeamsPage(user: firebase.User) {
    this.apiService.getAPI().login(user.email, user.uid).then(() => {
      this.router.navigate(["/teams"]);
      this.clearInputs();
    }).catch(error => {
      this.alertService.errorAuthProcess(error);
    });
  }

  setCurrentUser() {
    const that = this;

    this.authService.getLoggedInUser().subscribe(user => {
      if (user !== null) {
        this.navigateToTeamsPage(user);
      }
    });
  }

  loginEmail() {
    this.authService.loginEmail(
      this.email,
      this.password,
      this.navigateToTeamsPage.bind(this)
    );
  }

  loginGoogle() {
    this.authService.loginGoogle(this.navigateToTeamsPage.bind(this));
  }

  logout() {
    this.authService.logout();
  }

  resetPassword() {
    this.authService.resetPassword(this.resetMail);
  }

  // Hilfsmethoden

  clearInputs() {
    this.email = "";
    this.password = "";
    this.resetMail = "";
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
