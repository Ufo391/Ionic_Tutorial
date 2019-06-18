import {createSelector} from '@ngrx/store';
import {User} from './../models/user.model';
import {AppState} from '../../../app.state';

export const selectUser = (state: AppState) => state.user;

export const selectUserToken = createSelector(
    selectUser,
    (state: User) => state.token
);
