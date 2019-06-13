import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/athentification.service";
import { AlertService } from "../../services/alert/alert.service";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Team } from '../../model/team.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TAltersklasse, TLiga, EnumsService } from 'src/app/services/enums/enums.service';
import { MockingService } from 'src/app/services/mocking/mocking.service';

enum ENUM_MODE { SELECTION, CREATE_TEAM, CREATE_PLAYER }

@Component({
  selector: "app-teams",
  templateUrl: "./teams.page.html",
  styleUrls: ["./teams.page.scss"]
})

export class TeamsPage implements OnInit {
  user: firebase.User;
  mode: ENUM_MODE;

  enumVisibilityMode = ENUM_MODE;

  altersklassenOptions = this.enumService.GetENUMValues(TAltersklasse);

  ligaOptions = this.enumService.GetENUMValues(TLiga);


  // Inputfields

  // Player
  name: string;
  isWoman: boolean;
  birth: Date;

  // Address
  street: string;
  streetnumber: string;
  postcode: number;
  town: string;
  phone: string;

  //Team  
  altersklasse: TAltersklasse;
  liga: TLiga;

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private http: HttpClient,
    private enumService: EnumsService,
    private mockingService: MockingService
  ) {
    this.mode = ENUM_MODE.SELECTION;
    this.setCurrentUser();
  }

  ngOnInit() { }

  setCurrentUser() {
    this.authService.getLoggedInUser().subscribe(user => {
      if (user !== null) {
        this.user = user;
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }

  private resetInputs(): void {
    this.name = "";

    this.altersklasse = undefined;
    this.liga = undefined;
  }

  onNewTeamClick() {
    this.mode = ENUM_MODE.CREATE_TEAM;
  }

  onNewPlayerClick() {
    this.mode = ENUM_MODE.CREATE_PLAYER;
  }

  submitNewTeam() {
    this.createNewTeam(this.name, this.altersklasse, this.liga);
    this.resetPageToDefaultView();
  }

  createNewTeam(name: string, alterklasse: TAltersklasse, liga: TLiga) {
    let team: Team = { alterklasse, liga, name, id: (Math.floor(Math.random() * 1000) + 5) };
    this.authService.getUser().teams.push(team);
  }

  resetPageToDefaultView() {
    this.mode = ENUM_MODE.SELECTION;
    this.resetInputs();
  }

  logout() {
    this.authService.logout();
  }
}
