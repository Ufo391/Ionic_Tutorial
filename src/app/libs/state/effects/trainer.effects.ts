import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TrainerService } from '../../../services/trainer.service';
import * as TrainerActions from './../actions/trainer.action';

@Injectable()
export class TrainerEffects {
    constructor(
        private actions$: Actions,
        private trainerService: TrainerService
    ) {}

    @Effect()
    GetCoach$ = this.actions$
    .pipe(
        ofType(TrainerActions.GET_ONE_COACH),
        mergeMap((action:TrainerActions.GetOneCoach) => this.trainerService.getOneCoach(action.id, action.auth))
    )
}
