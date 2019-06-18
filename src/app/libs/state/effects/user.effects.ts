import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as UserActions from './../actions/user.action';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}

    @Effect()
    Login$ = this.actions$
    .pipe(
        ofType(UserActions.LOGIN),
        mergeMap(() => this.userService.Login('Patrick Poppe', 'patrick.poppe94@gmail.com', 'mYkXU0SUhfi4rXc0sN6O5sCNpQt3D8yzlqDY0Gn0ix8=')
        .pipe(
            map(user => new UserActions.LoginDone(user)),
            catchError(() => EMPTY)
        ))
    );

    @Effect()
    Logout$ = this.actions$
    .pipe(
        ofType(UserActions.LOGOUT),
        mergeMap(() => this.userService.Logout()
        .pipe(
            map(id => new UserActions.LogoutDone()),
            catchError(() => EMPTY)
        ))
    );
}
