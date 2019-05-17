import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 User: User;

  constructor() { }

  ngOnInit() {
  }

}
