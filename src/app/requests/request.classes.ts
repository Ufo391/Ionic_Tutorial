import { Address } from "../model/address.model";
import { PlayerPropertie } from "../model/playerPropertie.model";

export class LoginRequest {
  name: string;
  email: string;
  firebaseID: string;
}

export class CreateTeamRequest {
  authtoken: string;
  name: string;
  altersklasse: number;
  liga: number;
}

export class CreatePlayerRequest {
  geburtstag: string;
  name: string;
  notiz: string;
  istFrau: boolean;
  nummer: number;
  kontakt: Address;
  merkmale: PlayerPropertie[];
}

export class InsertPlayerToTeamRequest {
  teamID: number;
  spielerID: number;
}
