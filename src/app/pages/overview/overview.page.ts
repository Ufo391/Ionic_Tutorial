import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../services/alert/alert.service";
import { Player } from "../../model/player.model";
import { Address } from 'src/app/model/address.model';

@Component({
  selector: "app-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"]
})
export class OverviewPage implements OnInit {
  constructor(private router: Router, private alertService: AlertService) { }

  players: Player[] = [
    {
      id: 1,
      name: "Hans Sarpei",
      birth: new Date(1991, 8, 29),
      address: new Address("Ligusterweg", "23a", 123456, "Kaiserslautern", "0176-126498"),
      isWoman: false,
      memo: "Hört nachts schlecht!",
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
      birth: new Date(Date.now()),
      address: new Address("Bellermannstraße", "93", 13357, "Berlin", "030-123654"),
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

  ngOnInit() { }

  showAdress() {
    this.alertService.showInformation(
      "Anschrift:",
      this.selectedPlayer.address.addressToString()
    );
  }
}
