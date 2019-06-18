import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Trainer } from './../models/trainer.model';

export const GET_ALL_COACHES = '[trainer] Get All Coaches';
export const GET_ALL_COACHES_DONE = '[trainer] Get All Coaches Done';
export const GET_ONE_COACH = '[trainer] Get One Coach';
export const GET_ONE_COACH_DONE = '[trainer] Get One Coach Done';
export const UPDATE_COACH = '[trainer] Update Coach';
export const UPDATE_COACH_DONE = '[trainer] Update Coach Done';
export const DELETE_COACH = '[trainer] Delete Coach';
export const DELETE_COACH_DONE = '[trainer] Delete Coach Done';

export class GetAllCoaches implements Action {
    readonly type = GET_ALL_COACHES;

    constructor(public auth: string) {}
}

export class GetAllCoachesDone implements Action {
    readonly type = GET_ALL_COACHES_DONE;

    constructor(public payload: Trainer[]) {}
}

export class GetOneCoach implements Action {
    readonly type = GET_ONE_COACH;

    constructor(public id: number, public auth: string) {}
}

export class GetOneCoachDone implements Action {
    readonly type = GET_ONE_COACH_DONE;

    constructor(public payload: Trainer) {}
}

export class UpdateCoach implements Action {
    readonly type = UPDATE_COACH;

    constructor(public id: number, public auth: string, public coach: Trainer) {}
}

export class UpdateCoachDone implements Action {
    readonly type = UPDATE_COACH_DONE;

    constructor(public payload: Trainer) {}
}

export class DeleteCoach implements Action {
    readonly type = DELETE_COACH;

    constructor(public id: number, public auth: string) {}
}

export class DeleteCoachDone implements Action {
    readonly type = DELETE_COACH_DONE;

    constructor(public payload: Trainer[]) {}
}

export type Actions = GetAllCoaches | GetAllCoachesDone | GetOneCoach 
                    | GetOneCoachDone | UpdateCoach | UpdateCoachDone | DeleteCoach | DeleteCoachDone;
