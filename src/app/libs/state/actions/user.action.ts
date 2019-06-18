import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from './../models/user.model';

export const LOGIN = '[USER] Login';
export const LOGIN_DONE = '[USER] Login Done';
export const LOGOUT = '[USER] Logout';
export const LOGOUT_DONE = '[USER] Logout Done';

export class Login implements Action {
    readonly type = LOGIN;

    constructor() {}
}

export class LoginDone implements Action {
    readonly type = LOGIN_DONE;

    constructor(public payload: User) {}
}

export class Logout implements Action {
    readonly type = LOGOUT;

    constructor() {}
}

export class LogoutDone implements Action {
    readonly type = LOGOUT_DONE;

    constructor() {}
}

export type Actions = Login | LoginDone | Logout | LogoutDone;
