import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Spieler } from '../models/spieler.model';

export const CREATE_PLAYER = '[Player] Create';
export const CREATE_PLAYER_DONE = '[Player] Create Done';
export const UPDATE_PLAYER = '[Player] Update';
export const UPDATE_PLAYER_DONE = '[Player] Update Done';
export const DELETE_PLAYER = '[Player] Delete';
export const DELETE_PLAYER_DONE = '[Player] Delete Done';
export const GET_PLAYER = '[Player] Get';
export const GET_PLAYER_DONE = '[Player] Get Done';

export class CreatePlayer implements Action {
    readonly type = CREATE_PLAYER;

    constructor() {}
}

export class CreatePlayerDone implements Action {
    readonly type = CREATE_PLAYER_DONE;

    constructor() {}
}

export class UpdatePlayer implements Action {
    readonly type = UPDATE_PLAYER;

    constructor() {}
}

export class UpdatePlayerDone implements Action {
    readonly type = UPDATE_PLAYER_DONE;

    constructor() {}
}

export class DeletePlayer implements Action {
    readonly type = DELETE_PLAYER;

    constructor() {}
}

export class DeletePlayerDone implements Action {
    readonly type = DELETE_PLAYER_DONE;

    constrcutor() {}
}

export class GetPlayer implements Action {
    readonly type = GET_PLAYER;

    constructor() {}
}

export class GetPlayerDone implements Action {
    readonly type = GET_PLAYER_DONE;

    constructor() {}
}

export type Actions = CreatePlayer | CreatePlayerDone | UpdatePlayer | UpdatePlayerDone | DeletePlayer 
                    | DeletePlayerDone | GetPlayer | GetPlayerDone;
                    