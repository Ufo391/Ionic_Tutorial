import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/athentification.service'
import { AlertService } from '../services/alert/alert.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  user: firebase.User;

  constructor(private authService: AuthService, private alertService: AlertService) {

  }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    this.authService.getLoggedInUser().subscribe(
      user => {
        console.log(user);
        this.user = user;
        this.alertService.showInformation("Erfolg:", "Willkommen: " + user.email);
      }
    );
  }

}
