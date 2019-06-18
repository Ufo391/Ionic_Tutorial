import {Action} from '@ngrx/store';
import {Uebung} from './../models/uebung.model';
import * as UebungActions from './../actions/uebung.action';

const initialState: Uebung[] = [{
    name: '',
    istOeffentlich: false
}];

export function allUebungenReducer(state:Uebung[] = initialState, action: UebungActions.Actions) {
    switch (action.type) {
        case UebungActions.GET_ALL_UEBUNGEN:
            return state;
        case UebungActions.GET_ALL_UEBUNGEN_DONE:
            return action.payload;
    }
}