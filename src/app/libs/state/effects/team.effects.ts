import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TeamService } from '../../services/team.service';
import * as TeamActions from './../actions/team.action';

@Injectable()
export class TeamEffects {
    constructor(
        private actions$: Actions,
        private teamService: TeamService
    ) {}

    @Effect()
    GetTeam$ = this.actions$
    .pipe(
        ofType(TeamActions.GET_TEAM),
        mergeMap((action:TeamActions.GetTeam) => this.teamService.GetTeam(action.id, action.auth)
        .pipe(
            map(team => new TeamActions.GetTeamDone(team)),
            catchError(() => EMPTY)
        ))
    );

    @Effect()
    GetAllTeams$ = this.actions$
    .pipe(
        ofType(TeamActions.GET_ALL_TEAMS),
        mergeMap((action: TeamActions.GetAllTeams) => this.teamService.GetAllTeams(action.auth)
        .pipe(
            map(teams => new TeamActions.GetAllTeamsDone(teams)),
            catchError(() => EMPTY)
        ))
    );

    @Effect()
    CreateTeam$ = this.actions$
    .pipe(
        ofType(TeamActions.CREATE_TEAM),
        mergeMap((action: TeamActions.CreateTeam) => this.teamService.CreateTeam(action.auth, action.team)
        .pipe(
            map(teams =>  new TeamActions.GetAllTeams(action.auth))
        ))
    );

    @Effect()
    UpdateTeam$ = this.actions$
    .pipe(
        ofType(TeamActions.UPDATE_TEAM),
        mergeMap((action: TeamActions.UpdateTeam) => this.teamService.UpdateTeam(action.auth, action.team)
        .pipe(
            map(team => new TeamActions.GetAllTeams(action.auth))
        ))
    );

    @Effect()
    DeleteTeam$ = this.actions$
    .pipe(
        ofType(TeamActions.DELETE_TEAM),
        mergeMap((action: TeamActions.DeleteTeam) => this.teamService.DeleteTeam(action.id, action.auth)
        .pipe(
            map(team => new TeamActions.GetAllTeams(action.auth))
        ))
    );
}
