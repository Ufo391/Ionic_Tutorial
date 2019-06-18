import { Action } from '@ngrx/store';
import { Trainer } from '../models/trainer.model';
import * as TrainerActions from '../actions/trainer.action';

const initialState: Trainer[] = [{
    id: null,
    firebaseID: '',
    name: '',
    email: '',
    geburtstag: null,
    lizenz: null
}]

export function allTrainerReducer(state: Trainer[] = initialState, action: TrainerActions.Actions) {
    switch (action.type) {
        case TrainerActions.GET_ALL_COACHES:
            return state;
        case TrainerActions.GET_ALL_COACHES_DONE:
            return action.payload;
        case TrainerActions.DELETE_COACH:
            return state;
        case TrainerActions.DELETE_COACH_DONE:
            return state;
    }
}
