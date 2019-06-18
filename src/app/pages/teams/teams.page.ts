import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/athentification.service";
import { AlertService } from "../../services/alert/alert.service";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Team } from '../../model/team.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TAltersklasse, TLiga, EnumsService } from 'src/app/services/enums/enums.service';
import { MockingService } from 'src/app/services/mocking/mocking.service';
import { UserService } from 'src/app/services/user/user.service';
import { Player } from 'src/app/model/player.model';
import { Address } from 'src/app/model/address.model';

enum ENUM_MODE { SELECTION, CREATE_TEAM }

@Component({
  selector: "app-teams",
  templateUrl: "./teams.page.html",
  styleUrls: ["./teams.page.scss"]
})

export class TeamsPage implements OnInit {
  mode: ENUM_MODE;

  enumVisibilityMode = ENUM_MODE;

  altersklassenOptions = this.enumService.GetENUMValues(TAltersklasse);

  ligaOptions = this.enumService.GetENUMValues(TLiga);

  private dumm_id_counter: number = 5;


  // Inputfields

  // Player
  name: string;

  //Team  
  altersklasse: TAltersklasse;
  liga: TLiga;

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private http: HttpClient,
    private enumService: EnumsService,
    private mockingService: MockingService,
    public userService: UserService
  ) {
    this.mode = ENUM_MODE.SELECTION;
    this.setCurrentUser();
  }

  ngOnInit() { }

  setCurrentUser() {
    this.authService.getLoggedInUser().subscribe(user => {
      if (user !== null) {
        // nötig ?
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }

  private resetInputs(): void {
    this.name = undefined;
    this.altersklasse = undefined;
    this.liga = undefined;
  }

  onNewTeamClick() {
    this.mode = ENUM_MODE.CREATE_TEAM;
  }

  onButtonTeamClick(index: number) {
    this.userService.selectedTeam = this.userService.user.teams[index];
    this.router.navigate(["/overview"]);
  }

  onTabButtonClick(routeTarget: string) {
    if (this.userService.selectedTeam !== undefined) {
      this.router.navigate([routeTarget]);
    } else {
      this.alertService.showInformation("Achtung:", "Bitte wählen sie zuerst eine Mannschaft aus!");
    }
  }

  submitNewTeam() {
    if (this.validateNewTeamInput() === true) {
      this.createNewTeam(this.name, this.altersklasse, this.liga);
      this.resetPageToDefaultView();
    } else {
      this.alertService.errorEmptyInputs();
    }
  }

  validateNewTeamInput(): boolean {
    return this.name !== undefined && this.altersklasse !== undefined && this.liga !== undefined;
  }

  createNewTeam(name: string, alterklasse: TAltersklasse, liga: TLiga) {
    const team: Team = { alterklasse, liga, name, id: (Math.floor(Math.random() * 1000) + 5), players: [] };
    this.userService.user.teams.push(team);
  }

  resetPageToDefaultView() {
    this.mode = ENUM_MODE.SELECTION;
    this.resetInputs();
  }

  logout() {
    this.authService.logout();
  }
}
