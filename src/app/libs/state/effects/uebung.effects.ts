import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UebungService } from '../../../services/uebung.service';
import * as UebungActions from './../actions/uebung.action';

@Injectable()
export class UebungEffects {
    constructor(
        private actions$: Actions,
        private uebungService: UebungService
    ) {}

    @Effect()
    GetUebung$ = this.actions$
    .pipe(
        ofType(UebungActions.GET_UEBUNG),
        mergeMap((action: UebungActions.GetUebung) => this.uebungService.GetUebung(action.id, action.auth)
        .pipe(
            map(uebung => new UebungActions.GetUebungDone(uebung)),
            catchError(() => EMPTY)
        ))
    );

    @Effect()
    GetAllUebungen$ = this.actions$
    .pipe(
        ofType(UebungActions.GET_ALL_UEBUNGEN),
        mergeMap((action: UebungActions.GetAllUebungen) => this.uebungService.GetAllUebungen(action.auth)
        .pipe(
            map(uebung => new UebungActions.GetAllUebungenDone(uebung)),
            catchError(() => EMPTY)
        ))
    );

    @Effect()
    CreateUebung$ = this.actions$
    .pipe(
        ofType(UebungActions.CREATE_UEBUNG),
        mergeMap((action: UebungActions.CreateUebung) => this.uebungService.CreateUebung(action.auth, action.uebung)
        .pipe(
            map(uebung => new UebungActions.GetAllUebungen(action.auth)),
            catchError(() => EMPTY)
        ))
    );

    @Effect()
    UpdateUebung$ = this.actions$
    .pipe(
        ofType(UebungActions.UPDATE_UEBUNG),
        mergeMap((action: UebungActions.UpdateUebung) => this.uebungService.UpdateUebung(action.id, action.auth, action.uebung)
        .pipe(
            map(uebung => new UebungActions.GetAllUebungen(action.auth)),
            catchError(() => EMPTY)
        ))
    );

    @Effect()
    DeleteUebung$ = this.actions$
    .pipe(
        ofType(UebungActions.DELETE_UEBUNG),
        mergeMap((action: UebungActions.DeleteUebung) => this.uebungService.DeleteUebung(action.id, action.auth)
        .pipe(
            map(uebung => new UebungActions.GetAllUebungen(action.auth)),
            catchError(() => EMPTY)
        ))
    );
}
