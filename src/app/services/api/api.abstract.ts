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

export abstract class AbstractServerAPI {
  constructor(public userService: UserService) {}

  /*
    async login(name: string, email: string, firebirdID: string): Promise<void> {
        const result: User = await this.getUser(email, firebirdID);
        if (result === null) {
            throw new Error('Der Benutzer mit der E-Mail-Adresse \"' + email + '\" existiert nicht!');
        } else {
            this.authService.setAuthToken(this.getToken(result), result);
            this.userService.user = result;
        }
    }*/

  abstract getUser(email: string, firebirdID: string): Promise<User>;
  abstract getToken(user: User): string;

  abstract login(
    name: string,
    email: string,
    firebaseID: string
  ): Promise<LoginResponse>;
  abstract logout(token: string): Promise<LogoutResponse>;
  abstract loginGoogle(): void;

  abstract GetAllTeams(token: string): Promise<GetAllTeamsResponse>;
  abstract GetTeam(token: string, id: number): Promise<GetTeamANDCreateTeamResponse>;
  abstract CreateTeam(token: string, team: Team): Promise<GetTeamANDCreateTeamResponse>;

  abstract CreatePlayer(token: string, player: Player): Promise<CreatePlayerResponse>;
  abstract GetPlayer(token: string, id: number): Promise<GetPlayerResponse>;
  abstract UpdatePlayer(token: string, id: number): Promise<UpdatePlayerResponse>;
}
