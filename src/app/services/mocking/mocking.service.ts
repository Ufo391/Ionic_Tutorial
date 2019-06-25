import { Injectable } from "@angular/core";
import { Player } from "src/app/model/player.model";
import { Address } from "src/app/model/address.model";
import { User } from "src/app/model/user.model";
import { Lizenz, Merkmale, EnumsService, TAltersklasse, TLiga } from "../enums/enums.service";
import { Team } from 'src/app/model/team.model';

@Injectable({
  providedIn: "root"
})
export class MockingService {
  constructor(private enumService: EnumsService) {
  }
  /*
    private trainer1: User = {
      id: 0,
      mail: "Löwi@fussball-trainer.de",
      name: "Jogi Löwi",
      birth: new Date("1979-01-16"),
      lizenz: Lizenz.A_LIZENZ,
      teams: [],
      exercises: []
    };
    private trainer2: User = {
      id: 1,
      mail: "derKaiser@fussball-trainer.de",
      name: "Thomi Gottschalk",
      birth: new Date("1954-05-03"),
      lizenz: Lizenz.B_LIZENZ,
      teams: [],
      exercises: []
    };
    private trainer3: User = {
      id: 2,
      mail: "Pudelski@fussball-trainer.de",
      name: "Patryk Pudelski",
      birth: new Date("1999-06-29"),
      lizenz: Lizenz.FUSSBALLLEHRER,
      teams: [],
      exercises: []
    };
    private trainer4: User = {
      id: 3,
      mail: "nkloss@fh-bielefeld.de",
      name: "Nikolai Kloß",
      birth: new Date("1991-08-29"),
      lizenz: Lizenz.A_LIZENZ,
      teams: [
        {
          alterklasse: TAltersklasse.U18, id: 0, liga: TLiga.KREISLIGA, name: "FC Entenhausen", players: [
            {
              id: 3,
              name: "Donald Duck",
              birth: new Date(1981, 3, 26),
              address: new Address(
                "Hannesfriedhof",
                "233a",
                684654,
                "Rudiwald",
                0o176654654
              ),
              istFrau: false,
              memo: "Quak!",
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
            }
          ]
        }
      ],
      exercises: []
    };
  
    public trainers: User[] = [this.trainer1, this.trainer2, this.trainer3, this.trainer4];
  
    public getPlayerById(id: number): Player {
      this.players.forEach((element) => {
        if (element.id === id) {
          return element;
        }
      });
  
      return undefined;
    }
  
    public getUserById(id: number): User {
      this.trainers.forEach((element) => {
        if (element.id === id) {
          return element;
        }
      });
  
      return undefined;
    }
  
    players: Player[] = [
      {
        id: 1,
        name: "Hans Sarpei",
        birth: new Date(1991, 3, 26),
        address: new Address(
          "Ligusterweg",
          "23a",
          123456,
          "Kaiserslautern",
          0o176 - 126498
        ),
        istFrau: false,
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
          0o30123654
        ),
        istFrau: false,
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
      },
    ];
    */
}
