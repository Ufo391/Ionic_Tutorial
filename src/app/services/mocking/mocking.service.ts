import { Injectable } from "@angular/core";
import { Player } from "src/app/model/player.model";
import { Address } from "src/app/model/address.model";
import { User } from "src/app/model/user.model";
import { Lizenz, Merkmale } from "../enums/enums.service";

@Injectable({
  providedIn: "root"
})
export class MockingService {
  constructor() {}

  private trainer1: User = new User(
    0,
    "Löwi@fussball-trainer.de",
    "Jogi Löwi",
    new Date("1979-01-16"),
    Lizenz.A_LIZENZ,
    null,
    null
  );
  private trainer2: User = new User(
    1,
    "derKaiser@fussball-trainer.de",
    "Thomi Gottschalk",
    new Date("1954-05-03"),
    Lizenz.B_LIZENZ,
    null,
    null
  );
  private trainer3: User = new User(
    2,
    "Pudelski@fussball-trainer.de",
    "Patryk Pudelski",
    new Date("1999-06-29"),
    Lizenz.FUSSBALLLEHRER,
    null,
    null
  );

  trainers: User[] = [this.trainer1, this.trainer2, this.trainer3];

  players: Player[] = [
    {
      id: 1,
      name: "Hans Sarpei",
      birth: new Date(1991, 8, 29),
      address: new Address(
        "Ligusterweg",
        "23a",
        123456,
        "Kaiserslautern",
        "0176-126498"
      ),
      isWoman: false,
      memo: "Hört nachts schlecht!",
      properties: [
        {
          creator: this.trainer1,
          creatorDate: new Date(Date.now()),
          typ: Merkmale.GEWICHT,
          value: 95
        },
        {
          creator: this.trainer1,
          creatorDate: new Date(Date.now()),
          typ: Merkmale.GROESSE,
          value: 195
        },
        {
          creator: this.trainer1,
          creatorDate: new Date(Date.now()),
          typ: Merkmale.SCHUSSKRAFT,
          value: 9
        }
      ]
    },
    {
      id: 2,
      name: "Rudi Voller",
      birth: new Date(Date.now()),
      address: new Address(
        "Bellermannstraße",
        "93",
        13357,
        "Berlin",
        "030-123654"
      ),
      isWoman: false,
      memo: "Hat immer Durst!",
      properties: [
        {
          creator: this.trainer2,
          creatorDate: new Date(Date.now()),
          typ: Merkmale.GEWICHT,
          value: 95
        },
        {
          creator: this.trainer1,
          creatorDate: new Date(2015, 5, 1),
          typ: Merkmale.TORWARTSPIEL_FANGEN,
          value: 4
        },
        {
          creator: this.trainer2,
          creatorDate: new Date(2018, 9, 16),
          typ: Merkmale.TORWARTSPIEL_FAUSTEN,
          value: 6
        }
      ]
    }
  ];
}
