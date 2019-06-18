import {Action} from '@ngrx/store';
import {Uebung} from './../models/uebung.model';
import * as UebungActions from './../actions/uebung.action';

const initialState: Uebung = {
    name: '',
    istOeffentlich: false
}

export function selectedUebungReducer(state: Uebung = initialState, action: UebungActions.Actions) {
    switch (action.type) {
        case UebungActions.GET_UEBUNG:
            return state;
        case UebungActions.GET_UEBUNG_DONE:
            return action.payload;
        case UebungActions.UPDATE_UEBUNG:
            return state;
        case UebungActions.DELETE_UEBUNG:
            return state;
        case UebungActions.CREATE_UEBUNG:
            return state;
    }
}