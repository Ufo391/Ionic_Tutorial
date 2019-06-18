import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.page.html',
  styleUrls: ['./team-management.page.scss'],
})
export class TeamManagementPage implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
