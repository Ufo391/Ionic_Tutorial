import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../libs/state/models/team.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class TeamService {
    constructor(private http: HttpClient) {}

    GetTeam(id:number, auth: string) {
        return this.http.get<Team>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Team/' + id + '?authtoken=' + auth);
    }

    GetAllTeams(auth:string) {
      return this.http.get<Team[]>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Team?authtoken=' + auth);
    }

    CreateTeam(auth:string, team:Team){
      return this.http.post<Team>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Team?authtoken=' + auth, team);
    }

    UpdateTeam(auth:string , team:Team){
      return this.http.put<Team>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Team/5?authtoken=' + auth, team);
    }

    DeleteTeam(id:number, auth:string) {
      return this.http.delete('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Team/' + id + '?authtoken=' + auth);
    }
  }