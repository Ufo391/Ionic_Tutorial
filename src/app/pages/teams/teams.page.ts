import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/athentification.service";
import { AlertService } from "../../services/alert/alert.service";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Team } from '../../model/team.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: "app-teams",
  templateUrl: "./teams.page.html",
  styleUrls: ["./teams.page.scss"]
})
export class TeamsPage implements OnInit {
  user: firebase.User;
  teams$: Observable<Team[]>;
  uid: Observable<string>;

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private http: HttpClient,
  ) {
    this.setCurrentUser();
    this.alertService.showInformation("", "" + this.authService.getUser().teams.length);
  }

  ngOnInit() {
    const params = new HttpParams()
      .set('authtoken', 'uid');

    const uri = 'https://virtserver.swaggerhub.com/AHeinisch/trainingsplaner/1.0.1/api/Team';

    this.teams$ = this.http.get<Team[]>(uri, { params });
  }

  setCurrentUser() {
    this.authService.getLoggedInUser().subscribe(user => {
      if (user !== null) {
        this.user = user;
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
