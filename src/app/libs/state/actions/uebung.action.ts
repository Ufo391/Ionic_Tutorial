import { Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Uebung} from './../models/uebung.model';

export const GET_ALL_UEBUNGEN = '[Uebung] Get All';
export const GET_ALL_UEBUNGEN_DONE = '[Uebung] Get All Done';
export const GET_UEBUNG = '[Uebung] Get';
export const GET_UEBUNG_DONE = '[Uebung] Get Done';
export const UPDATE_UEBUNG = '[Uebung] Update';
export const CREATE_UEBUNG = '[Uebung] Create';
export const DELETE_UEBUNG = '[Uebung] Delete';

export class GetAllUebungen implements Action {
    readonly type = GET_ALL_UEBUNGEN;

    constructor(public auth: string) {}
}

export class GetAllUebungenDone implements Action {
    readonly type = GET_ALL_UEBUNGEN_DONE;

    constructor(public payload: Uebung[]) {}
}

export class GetUebung implements Action {
    readonly type = GET_UEBUNG;

    constructor(public id: number, public auth: string) {}
}

export class GetUebungDone implements Action {
    readonly type = GET_UEBUNG_DONE;

    constructor(public payload: Uebung) {}
}

export class UpdateUebung implements Action {
    readonly type = UPDATE_UEBUNG;

    constructor(public id: number, public auth: string, public uebung: Uebung) {}
}

export class CreateUebung implements Action {
    readonly type = CREATE_UEBUNG;

    constructor(public id: number, public auth: string, public uebung: Uebung) {}
}

export class DeleteUebung implements Action {
    readonly type = DELETE_UEBUNG;

    constructor(public id: number, public auth: string) {}
}

export type Actions = GetUebung | GetAllUebungen | CreateUebung | DeleteUebung | GetUebungDone | GetAllUebungenDone | UpdateUebung;
