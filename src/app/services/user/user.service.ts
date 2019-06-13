import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Team } from 'src/app/model/team.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User;
  selectedTeam: Team;
}
