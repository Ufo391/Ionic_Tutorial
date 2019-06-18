import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SpielerService } from '../../../services/player.service';
import * as PlayerActions from './../actions/player.actions';

@Injectable()
export class PlayerEffects {
    constructor(
        private actions$: Actions,
        private playerService: SpielerService
    ) {}

    @Effect()
    CreatePlayer$ = this.actions$
    .pipe(
        ofType(PlayerActions.CREATE_PLAYER),
        mergeMap(() => this.playerService.CreatePlayer()
        .pipe(
            map(player => new PlayerActions.CreatePlayerDone()),
            catchError(() => EMPTY)
        ))
    )
}