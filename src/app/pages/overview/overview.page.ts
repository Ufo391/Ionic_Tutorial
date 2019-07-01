import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert/alert.service";
import { Player } from "../../model/player.model";
import { Address } from "src/app/model/address.model";
import { UserService } from "src/app/services/user/user.service";
import {
  EnumsService,
  TAltersklasse,
  TLiga
} from "src/app/services/enums/enums.service";
import { Team } from "src/app/model/team.model";
import { AuthService } from "src/app/services/auth/athentification.service";
import { ApiService } from "src/app/services/api/api.service";
import {
  CreatePlayerResponse,
  InsertPlayerToTeamResponse,
  GetTrainerResponse,
  GetTeamANDCreateTeamResponse
} from "src/app/responses/response.interfaces";
import { DatePipe } from "@angular/common";

enum ENUM_MODE {
  EVALUATE_PLAYER,
  CREATE_PLAYER
}

@Component({
  selector: "app-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"]
})
export class OverviewPage implements OnInit {
  mode: ENUM_MODE;

  enumVisibilityMode = ENUM_MODE;

  altersklassenOptions = this.enumService.GetENUMValues(TAltersklasse);

  ligaOptions = this.enumService.GetENUMValues(TLiga);

  UserTeams: Team[];

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
  phone: number;

  //Team
  altersklasse: TAltersklasse;
  liga: TLiga;
  selectedTeamNewPlayer: Team;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService,
    public userService: UserService,
    private enumService: EnumsService,
    private apiService: ApiService,
    private datePipe: DatePipe
  ) {}

  players: Player[];
  selectedPlayer: Player;

  ngOnInit() {}

  ionViewDidEnter() {
    // Event
    this.mode = ENUM_MODE.EVALUATE_PLAYER;
    this.RefreshPlayersOfSelectedTeam();
    this.selectedPlayer = undefined;
  }

  showAdress() {
    const adr: Address = this.selectedPlayer.kontakt;
    const msg: string =
      adr.strassenname +
      " " +
      adr.hausnummer +
      " " +
      adr.postleitzahl +
      " " +
      adr.ort +
      " (Tel.: " +
      adr.telefonnummer +
      ")";

    this.alertService.showInformation("Anschrift:", msg);
  }

  submitNewPlayer() {
    if (this.validateNewPlayerInput() === true) {
      const token: string = this.authService.getToken();
      this.apiService
        .CreatePlayer(token, {
          birth: this.datePipe.transform(this.birth),
          merkmale: [],
          name: this.name,
          notiz: "",
          nummer: this.phone,
          teams: [],
          istFrau: this.isWoman,
          kontakt: {
            hausnummer: this.streetnumber,
            ort: this.town,
            postleitzahl: this.postcode,
            strassenname: this.street,
            telefonnummer: "" + this.phone
          }
        })
        .then((res: CreatePlayerResponse) => {
          this.apiService
            .InsertPlayerToTeam(token, this.userService.selectedTeam.id, res.id)
            .then((res: InsertPlayerToTeamResponse) => {
              this.resetPageToDefaultView();
            });
        });
    } else {
      this.alertService.errorEmptyInputs();
    }
  }

  resetPageToDefaultView() {
    this.mode = ENUM_MODE.EVALUATE_PLAYER;
    this.RefreshPlayersOfSelectedTeam();
    this.resetInputs();
  }

  private RefreshPlayersOfSelectedTeam() {
    const that = this;
    this.apiService
      .GetTrainer(
        this.authService.getToken(),
        this.authService.getUser().trainer.id
      )
      .then((res: GetTrainerResponse) => {
        that.apiService
          .GetTeam(
            that.authService.getToken(),
            that.userService.selectedTeam.id
          )
          .then((res: GetTeamANDCreateTeamResponse) => {
            that.players = res.spieler;
          });
      });
  }

  private resetInputs(): void {
    this.name = undefined;
    this.altersklasse = undefined;
    this.liga = undefined;
    this.phone = undefined;
    this.town = undefined;
    this.street = undefined;
    this.streetnumber = undefined;
    this.postcode = undefined;
    this.birth = undefined;
    this.isWoman = undefined;
  }

  validateNewPlayerInput(): boolean {
    if (this.isWoman === undefined) {
      this.isWoman = false;
    }
    return (
      this.name !== undefined &&
      this.birth !== undefined &&
      this.street !== undefined &&
      this.streetnumber !== undefined &&
      this.postcode !== undefined &&
      this.town !== undefined &&
      this.phone !== undefined
    );
  }

  onNewPlayerClick() {
    this.mode = ENUM_MODE.CREATE_PLAYER;
  }

  transformDate(date: Date): string {
    return this.datePipe.transform(date, "yyyy-MM-dd");
  }
}
