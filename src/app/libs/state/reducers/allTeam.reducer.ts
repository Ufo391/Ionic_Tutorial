import { Action } from '@ngrx/store';
import { Team } from './../models/team.model';
import * as TeamActions from './../actions/team.action';

const initialState: Team = {
    id: null,
    altersklasse: null,
    liga: null,
    name: '',
};

export function allTeamsReducer(state: Team = initialState, action: TeamActions.Actions) {
    switch (action.type) {
        case TeamActions.GET_ALL_TEAMS:
            return state;
        case TeamActions.GET_ALL_TEAMS_DONE:
            return action.payload;
    }
}