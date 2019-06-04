import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert/alert.service";
import { AuthService } from "../../services/auth/athentification.service";
import { ApiService } from 'src/app/services/api/api.service';

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
  ) {
    this.setCurrentUser();
  }

  ngOnInit() { }

  navigateToTeamsPage() {

    const that = this;

    this.apiService.login(this.email, this.authService.getUser().uid).then(result => {

      that.router.navigate(["/teams"]);
      that.clearInputs();
      that.alertService.showInformation("debug:", JSON.parse(result)); hier weiter machen

    }).catch(error => { that.alertService.errorAuthProcess(error); });

  }

  setCurrentUser() {
    const that = this;

    this.authService.getLoggedInUser().subscribe(user => {
      if (user !== null) {
        this.navigateToTeamsPage();
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