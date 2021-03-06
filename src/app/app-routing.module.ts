import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'teams', loadChildren: './pages/teams/teams.module#TeamsPageModule'},
  { path: 'overview', loadChildren: './pages/overview/overview.module#OverviewPageModule'},
  { path: 'planer', loadChildren: './pages/planer/planer.module#PlanerPageModule' },  { path: 'team-management', loadChildren: './pages/team-management/team-management.module#TeamManagementPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
