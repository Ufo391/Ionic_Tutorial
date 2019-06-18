import {Action} from '@ngrx/store';
import {Spieler} from './../models/spieler.model';
import * as PlayerActions from './../actions/player.actions';

const initialState: Spieler = {
    id: null,
    geburtstag: '',
    istFrau: false,
    kontakt: null,
    name: '',
    notiz: '',
    merkmale: null
};

export function playerReducer(state: Spieler = initialState, action: PlayerActions.Actions) {
    switch (action.type) {
        case PlayerActions.CREATE_PLAYER:
            return state;
        case PlayerActions.CREATE_PLAYER_DONE:
            return state;
        case PlayerActions.UPDATE_PLAYER:
            return state;
        case PlayerActions.UPDATE_PLAYER_DONE:
            return state;
        case PlayerActions.DELETE_PLAYER:
            return state;
        case PlayerActions.DELETE_PLAYER_DONE:
            return state;
        case PlayerActions.GET_PLAYER:
            return state;
        case PlayerActions.GET_PLAYER_DONE:
            return state;
    }
}
