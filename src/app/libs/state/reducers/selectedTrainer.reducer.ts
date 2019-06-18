import { Action } from '@ngrx/store';
import { Trainer } from '../models/trainer.model';
import * as TrainerActions from '../actions/trainer.action';

const initialState: Trainer = {
    id: null,
    firebaseID: '',
    name: '',
    email: '',
    geburtstag: null,
    lizenz: null
};

export function selectedTrainerReducer(state: Trainer = initialState, action: TrainerActions.Actions) {
    switch (action.type) {
        case TrainerActions.GET_ONE_COACH:
            return state;
        case TrainerActions.GET_ONE_COACH_DONE:
            return action.payload;
        case TrainerActions.UPDATE_COACH:
            return state;
        case TrainerActions.UPDATE_COACH_DONE:
            return action.payload;
    }
}
