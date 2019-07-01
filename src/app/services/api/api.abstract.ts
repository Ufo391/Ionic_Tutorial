import { User } from "src/app/model/user.model";
import { UserService } from "../user/user.service";
import { Team } from "src/app/model/team.model";
import {
  LoginResponse,
  LogoutResponse,
  GetAllTeamsResponse,
  GetTeamANDCreateTeamResponse,
  CreatePlayerResponse,
  GetPlayerResponse,
  UpdatePlayerResponse
} from "src/app/responses/response.interfaces";
import { Player } from "src/app/model/player.model";
import { TAltersklasse, TLiga } from '../enums/enums.service';

export abstract class AbstractServerAPI {
  constructor(public userService: UserService) {}

  abstract login(
    name: string,
    email: string,
    firebaseID: string
  ): Promise<LoginResponse>;
  abstract logout(token: string): Promise<LogoutResponse>;
  abstract loginGoogle(): void;

  abstract GetAllTeams(token: string): Promise<GetAllTeamsResponse>;
  abstract GetTeam(token: string, id: number): Promise<GetTeamANDCreateTeamResponse>;
  abstract CreateTeam(token: string, name: string, altersklasse: TAltersklasse, liga: TLiga): Promise<GetTeamANDCreateTeamResponse>;

  abstract CreatePlayer(token: string, player: Player): Promise<CreatePlayerResponse>;
  abstract GetPlayer(token: string, id: number): Promise<GetPlayerResponse>;
  abstract UpdatePlayer(token: string, id: number): Promise<UpdatePlayerResponse>;
}
