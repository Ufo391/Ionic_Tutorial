import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert/alert.service";
import { Player } from "../../model/player.model";
import { Address } from "src/app/model/address.model";
import { MockingService } from "../../services/mocking/mocking.service";
import { UserService } from 'src/app/services/user/user.service';
import { EnumsService, TAltersklasse, TLiga } from 'src/app/services/enums/enums.service';
import { Team } from 'src/app/model/team.model';

enum ENUM_MODE { EVALUATE_PLAYER, CREATE_PLAYER }

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

  private dumm_id_counter: number = 5;

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
    private mockingService: MockingService,
    public userService: UserService,
    private enumService: EnumsService
  ) { }

  players: Player[];
  selectedPlayer: Player;

  ngOnInit() { }

  ionViewDidEnter() {
    // Event
    this.mode = ENUM_MODE.EVALUATE_PLAYER;
    this.players = this.userService.selectedTeam.players;
    this.selectedPlayer = undefined;
  }

  showAdress() {
    this.alertService.showInformation(
      "Anschrift:",
      this.selectedPlayer.address.addressToString()
    );
  }

  submitNewPlayer() {
    if (this.validateNewPlayerInput() === true) {
      this.createNewPlayer(this.name, this.birth, this.street, this.streetnumber, this.postcode, this.town, this.phone, this.isWoman)
      this.resetPageToDefaultView();
    } else {
      this.alertService.errorEmptyInputs();
    }
  }

  createNewPlayer(name: string, birth: Date, street: string,
    streetnumber: string, postcode: number, town: string,
    phone: number, isWomen: boolean): void {

    const player: Player = {
      isWoman: isWomen, birth, memo: "",
      id: this.dumm_id_counter, name, properties: [],
      address: new Address(street, streetnumber, postcode, town, phone)
    }
    this.dumm_id_counter++;
    this.userService.selectedTeam.players.push(player);
    debugger;
  }

  resetPageToDefaultView() {
    this.mode = ENUM_MODE.EVALUATE_PLAYER;
    this.resetInputs();
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
    if (this.isWoman === undefined) { this.isWoman = false; }
    return this.name !== undefined && this.birth !== undefined && this.street !== undefined
      && this.streetnumber !== undefined && this.postcode !== undefined
      && this.town !== undefined && this.phone !== undefined;
  }

  onNewPlayerClick() {
    this.mode = ENUM_MODE.CREATE_PLAYER;
  }
}
