import {Action} from '@ngrx/store';
import {User} from './../models/user.model';
import { Trainer} from './../models/trainer.model';
import * as UserActions from './../actions/user.action';



const initialState: User = {
    token: '',
    trainer: {
        id: null,
        firebaseID: '',
        name: '',
        email: '',
        geburtstag: null,
        lizenz: null
    }
};

export function userReducer(state: User = initialState, action: UserActions.Actions) {
    switch (action.type){
        case UserActions.LOGIN:
            return state;
        case UserActions.LOGIN_DONE:
            return action.payload;
        case UserActions.LOGOUT:
            return state;
        case UserActions.LOGOUT_DONE:
            return state;
        default:
            return state;
    }
}
