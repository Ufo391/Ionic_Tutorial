import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth/athentification.service";
import { AlertService } from "../services/alert/alert.service";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.page.html",
  styleUrls: ["./teams.page.scss"]
})
export class TeamsPage implements OnInit {
  user: firebase.User;

  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.setCurrentUser();
  }

  ngOnInit() { }

  setCurrentUser() {
    this.authService.getLoggedInUser().subscribe(user => {
      if (user !== null) {
        this.user = user;
        this.alertService.showInformation(
          "Erfolg:",
          "Willkommen: " + user.email
        );
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
