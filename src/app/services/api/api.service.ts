import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractServerAPI } from './api.abstract';
import { AuthService } from '../auth/athentification.service';
import { UserService } from '../user/user.service';
import { User } from 'src/app/model/user.model';
import {
  Login,
  Logout,
  GetAllTeams,
  GetTeamANDCreateTeam,
  CreatePlayer,
  GetPlayer,
  UpdatePlayer
} from 'src/app/responses/response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends AbstractServerAPI {

  constructor(public authService: AuthService, public userService: UserService) {
    super(authService, userService);
  }

  getUser(email: string, firebirdID: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getToken(user: import("../../model/user.model").User): string {
    throw new Error("Method not implemented.");
  }
  login(name: string, email: string, firebaseID: string): Promise<Login> {
    throw new Error("Method not implemented.");
  }
  logout(token: string): Promise<Logout> {
    throw new Error("Method not implemented.");
  }
  loginGoogle(): void {
    throw new Error("Method not implemented.");
  }
  GetAllTeams(token: string): Promise<GetAllTeams> {
    throw new Error("Method not implemented.");
  }
  GetTeam(token: string, id: number): Promise<GetTeamANDCreateTeam> {
    throw new Error("Method not implemented.");
  }
  CreateTeam(token: string, team: import("../../model/team.model").Team): Promise<GetTeamANDCreateTeam> {
    throw new Error("Method not implemented.");
  }
  CreatePlayer(token: string, player: import("../../model/player.model").Player): Promise<CreatePlayer> {
    throw new Error("Method not implemented.");
  }
  GetPlayer(token: string, id: number): Promise<GetPlayer> {
    throw new Error("Method not implemented.");
  }
  UpdatePlayer(token: string, id: number): Promise<UpdatePlayer> {
    throw new Error("Method not implemented.");
  }

  // erstmal von aussen nicht zugreifbar lassen 
  /*
  private login(email: string, firebirdID: string): Promise<User> {

    return new Promise((resolve, reject) => {
      const result: User = this.apiInterface.login(email, firebirdID);

      if (result === null) {
        reject(new Error('User mit der E-Mail-Adresse \"' + email + '\" existiert nicht!'));
      } else {
        resolve(result);
      }
    });

    
    const params = new HttpParams().set('email', email).set('firebirdID', firebirdID);
    const uri = this.getRootUri() + 'login';
    return this.http.post<LoginResponse>(uri, { params });      
  }
  
  */

  private getRootUri(): string {
    return 'https://virtserver.swaggerhub.com/AHeinisch/trainingsplaner/1.0.1/api/';
  }

}
