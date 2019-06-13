import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OverviewPage } from './overview.page';
import { UserService } from 'src/app/services/user/user.service';
import { Team } from 'src/app/model/team.model';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OverviewPage]
})
export class OverviewPageModule {

}
