import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/athentification.service";
import { AlertService } from "../../services/alert/alert.service";
import { Router } from "@angular/router";
import {
  TAltersklasse,
  TLiga,
  EnumsService
} from "src/app/services/enums/enums.service";
import { UserService } from "src/app/services/user/user.service";
import { Trainer } from "src/app/model/trainer.model";
import { ApiService } from "src/app/services/api/api.service";
import { GetTeamANDCreateTeamResponse } from "src/app/responses/response.interfaces";

enum ENUM_MODE {
  SELECTION,
  CREATE_TEAM
}

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

  // Player
  name: string;

  //Team
  altersklasse: TAltersklasse;
  liga: TLiga;

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private enumService: EnumsService,
    public userService: UserService,
    private apiService: ApiService
  ) {
    this.createEmptyTeamsArray();
  }

  ngOnInit() {
    this.createEmptyTeamsArray();
  }

  ionViewDidEnter() {
    // Event
    this.mode = ENUM_MODE.SELECTION;
    this.createEmptyTeamsArray();
  }

  private createEmptyTeamsArray() {
    if (this.authService.getUser() === undefined) {
      throw new Error("Es muss in diesem Bereich ein User existieren!");
    }
    const trainer: Trainer = this.authService.getUser().trainer;
    if (trainer.teams === undefined) {
      trainer.teams = [];
    }
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
    this.userService.selectedTeam = this.authService.getUser().trainer.teams[
      index
    ];
    this.router.navigate(["/overview"]);
  }

  onTabButtonClick(routeTarget: string) {
    if (this.userService.selectedTeam !== undefined) {
      this.router.navigate([routeTarget]);
    } else {
      this.alertService.showInformation(
        "Achtung:",
        "Bitte wählen sie zuerst eine Mannschaft aus!"
      );
    }
  }

  submitNewTeam() {
    if (this.validateNewTeamInput() === true) {
      //this.createNewTeam(this.name, this.altersklasse, this.liga);

      this.apiService
        .CreateTeam(
          this.authService.getToken(),
          this.name,
          this.altersklasse,
          this.liga
        )
        .then((res: GetTeamANDCreateTeamResponse) => {
          debugger;
          this.resetPageToDefaultView();
        });
    } else {
      this.alertService.errorEmptyInputs();
    }
  }

  validateNewTeamInput(): boolean {
    return (
      this.name !== undefined &&
      this.altersklasse !== undefined &&
      this.liga !== undefined
    );
  }

  createNewTeam(name: string, altersklasse: TAltersklasse, liga: TLiga) {
    this.apiService.CreateTeam(
      this.authService.getUser().token,
      name,
      altersklasse,
      liga
    );
  }

  resetPageToDefaultView() {
    this.mode = ENUM_MODE.SELECTION;
    this.resetInputs();
  }

  logout() {
    this.authService.logout();
  }
}
