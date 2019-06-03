import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert/alert.service";
import { Player } from "../../model/player.model";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"]
})
export class OverviewPage implements OnInit {
  constructor(private router: Router, private alertService: AlertService) {}

  players: Player[] = [
    {
      id: 1,
      name: "Hans Sarpei",
      birth: "29.08.1991",
      address: "Ligusterweg 33a",
      isWoman: false,
      memo: "",
      properties: [
        { name: "Größe", value: 155, type: 0 },
        { name: "Gewicht", value: 58, type: 1 },
        { name: "St. Fuß", value: 4, type: 2 },
        { name: "Sw. Fuß", value: 9, type: 3 }
      ]
    },
    {
      id: 2,
      name: "Rudi Voller",
      birth: "16.01.1971",
      address: "Musterstraße 33a",
      isWoman: false,
      memo: "Hat immer Durst!",
      properties: [
        { name: "Größe", value: 180, type: 0 },
        { name: "Gewicht", value: 125, type: 1 },
        { name: "St. Fuß", value: 1, type: 2 },
        { name: "Sw. Fuß", value: 4, type: 3 }
      ]
    }
  ];

  selectedPlayer: Player;

  ngOnInit() {}

  optionsFn(selected_value: Player) {
    console.log(selected_value.name + ' mit id ' + selected_value.id);
    console.log(this.selectedPlayer.name);
  }

  showAdress() {
    this.alertService.showInformation(
      "Anschrift:",
      this.selectedPlayer.address
    );
  }
}
