import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

export const GET_ALL_TEAMS = '[team] Get All Teams';
export const GET_ALL_TEAMS_DONE = '[team] Get All Teams Done';
export const GET_TEAM = '[team] Get One Team';
export const GET_TEAM_DONE = '[team] Get One Team Done';
export const CREATE_TEAM = '[team] Create New Team';
export const CREATE_TEAM_DONE = '[team] Create New Team Done';
export const UPDATE_TEAM = '[team] Update Team';
export const UPDATE_TEAM_DONE = '[team] Update Team Done';
export const DELETE_TEAM = '[team] Delete Team';
export const DELETE_TEAM_DONE = '[team] Delete Team Done';

export class GetAllTeams implements Action {
    readonly type = GET_ALL_TEAMS;

    constructor(public auth:string) {}
}

export class GetAllTeamsDone implements Action {
    readonly type = GET_ALL_TEAMS_DONE;

    constructor(public payload: Team[]) {}
}

export class GetTeam implements Action {
    readonly type = GET_TEAM;

    constructor(public id:number, public auth:string) {}
}

export class GetTeamDone implements Action {
    readonly type = GET_TEAM_DONE;

    constructor(public payload: Team) {}
}

export class CreateTeam implements Action {
    readonly type = CREATE_TEAM;

    constructor(public auth:string, public team:Team) {}
}

export class CreateTeamDone implements Action {
    readonly type = CREATE_TEAM_DONE;

    constructor() {}
}

export class UpdateTeam implements Action {
    readonly type = UPDATE_TEAM;

    constructor(public auth:string, public team:Team) {}
}

export class UpdateTeamDone implements Action {
    readonly type = UPDATE_TEAM_DONE;

    constructor(public payload: Team) {}
}

export class DeleteTeam implements Action {
    readonly type = DELETE_TEAM;

    constructor(public id:number, public auth:string) {}
}

export class DeleteTeamDone implements Action {
    readonly type = DELETE_TEAM_DONE;

    constructor() {}
}

export type Actions = GetAllTeams | GetAllTeamsDone | GetTeam | GetTeamDone | CreateTeam | CreateTeamDone | UpdateTeam 
                    | UpdateTeamDone | DeleteTeam | DeleteTeamDone;
