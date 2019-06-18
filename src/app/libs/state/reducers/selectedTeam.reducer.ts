import { Action } from '@ngrx/store';
import { Team } from './../models/team.model';
import * as TeamActions from './../actions/team.action';

const initialState: Team = {
    id: null,
    altersklasse: null,
    liga: null,
    name: '',
    spieler: []
};

export function selectedTeamReducer(state: Team = initialState, action: TeamActions.Actions) {
    switch (action.type) {
        case TeamActions.GET_TEAM:
            return state;
        case TeamActions.GET_TEAM_DONE:
            return action.payload;
        case TeamActions.UPDATE_TEAM:
            return state;
        case TeamActions.UPDATE_TEAM_DONE:
            return action.payload;
    }
}