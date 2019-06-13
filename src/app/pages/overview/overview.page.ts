import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert/alert.service";
import { Player } from "../../model/player.model";
import { Address } from "src/app/model/address.model";
import { MockingService } from "../../services/mocking/mocking.service";
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: "app-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"]
})
export class OverviewPage implements OnInit {
  constructor(
    private router: Router,
    private alertService: AlertService,
    private mockingService: MockingService,
    public userService: UserService
  ) {
    this.players = userService.selectedTeam.players;
  }

  players: Player[];
  selectedPlayer: Player;

  ngOnInit() {}

  showAdress() {
    this.alertService.showInformation(
      "Anschrift:",
      this.selectedPlayer.address.addressToString()
    );
  }
}
