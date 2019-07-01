import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AbstractServerAPI } from "./api.abstract";
import { UserService } from "../user/user.service";
import { User } from "src/app/model/user.model";
import {
  LoginRequest,
  CreateTeamRequest
} from "../../requests/request.classes";
import {
  LoginResponse,
  LogoutResponse,
  GetAllTeamsResponse,
  GetTeamANDCreateTeamResponse,
  CreatePlayerResponse,
  GetPlayerResponse,
  UpdatePlayerResponse
} from "src/app/responses/response.interfaces";
import { Team } from "src/app/model/team.model";
import { TAltersklasse, TLiga } from '../enums/enums.service';

@Injectable({
  providedIn: "root"
})
export class ApiService extends AbstractServerAPI {
  constructor(public userService: UserService, private http: HttpClient) {
    super(userService);
  }

  login(
    name: string,
    email: string,
    firebaseID: string
  ): Promise<LoginResponse> {
    const body: LoginRequest = { name, email, firebaseID };
    const uri = this.getRootUri() + "Login";
    return this.http.post<LoginResponse>(uri, body).toPromise();
  }

  CreateTeam(token: string, name: string, altersklasse: TAltersklasse, liga: TLiga): Promise<GetTeamANDCreateTeamResponse> {
    const body: CreateTeamRequest = {
      authtoken: token,
      altersklasse,
      liga,
      name
    };
    const uri = this.getRootUri() + "Team";
    return this.http.post<GetTeamANDCreateTeamResponse>(uri, body).toPromise();
  }

  logout(token: string): Promise<LogoutResponse> {
    throw new Error("Method not implemented.");
  }
  loginGoogle(): void {
    throw new Error("Method not implemented.");
  }
  GetAllTeams(token: string): Promise<GetAllTeamsResponse> {
    throw new Error("Method not implemented.");
  }
  GetTeam(token: string, id: number): Promise<GetTeamANDCreateTeamResponse> {
    throw new Error("Method not implemented.");
  }
  CreatePlayer(
    token: string,
    player: import("../../model/player.model").Player
  ): Promise<CreatePlayerResponse> {
    throw new Error("Method not implemented.");
  }
  GetPlayer(token: string, id: number): Promise<GetPlayerResponse> {
    throw new Error("Method not implemented.");
  }
  UpdatePlayer(token: string, id: number): Promise<UpdatePlayerResponse> {
    throw new Error("Method not implemented.");
  }

  private getRootUri(): string {
    return "http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/";
  }
}
