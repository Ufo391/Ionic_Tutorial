import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {
      mail: 'nkloss@fh-bielefeld.de',
      password: 'geheim'
    },
    {
      mail: 'pmafay@fh-bielefeld.de',
      password: 'nochgeheimer'
    }
  ];

  constructor() {}

  getAllUsers() {
    return [...this.users];
  }

  getUser(mail: string) {
    return this.users.find(user => {
      return user.mail === mail;
    });
  }
}
