import { Component, OnInit } from "@angular/core";
import { AlertService } from "../../services/alert/alert.service";
import { AuthService } from "../../services/auth/athentification.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  firstName: string = "";
  lastName: string = "";
  mail: string = "";
  password: string = "";
  passwordCheck: string = "";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) {
    this.setCurrentUser();
  }

  ngOnInit() {}

  register() {
    if (this.checkInputs() === true) {
      this.transferData("/teams");
    }
  }

  private transferData(page: string) {
    this.authService.register(
      this.mail,
      this.password,
      this.navigateToPage.bind(this),
      page
    );
  }

  private clearInputs() {
    this.firstName = "";
    this.lastName = "";
    this.mail = "";
    this.password = "";
    this.passwordCheck = "";
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

  navigateToPage(page: string) {
    this.router.navigate([page]);
    this.clearInputs();
  }

  setCurrentUser() {
    const that = this;

    this.authService.getLoggedInUser().subscribe(user => {
      if (user !== null) {
        this.navigateToPage("/teams");
      }
    });
  }

  // Events
  private onRegisterButtonClick() {
    this.register();
  }
}
