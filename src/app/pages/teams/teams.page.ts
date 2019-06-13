import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/athentification.service";
import { AlertService } from "../../services/alert/alert.service";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Team } from '../../model/team.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TAltersklasse, TLiga, EnumsService } from 'src/app/services/enums/enums.service';

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
  altersklasseSelected;

  ligaOptions = this.enumService.GetENUMValues(TLiga);
  ligaSelected;

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
  alterklasse: TAltersklasse;
  liga: TLiga;

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private http: HttpClient,
    private enumService: EnumsService
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

    this.altersklasseSelected = undefined;
    this.ligaSelected = undefined;
  }

  onNewTeamClick() {
    this.mode = ENUM_MODE.CREATE_TEAM;
  }

  onNewPlayerClick() {
    this.mode = ENUM_MODE.CREATE_PLAYER;
  }

  submitNewTeam() {
    this.resetPageToDefaultView();
    throw new Error('noch nicht Implementiert!');
  }



  resetPageToDefaultView() {
    this.mode = ENUM_MODE.SELECTION;
    this.resetInputs();
  }

  logout() {
    this.authService.logout();
  }
}
