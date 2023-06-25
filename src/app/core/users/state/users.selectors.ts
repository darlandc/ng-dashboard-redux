import { createFeatureSelector, createSelector, on } from '@ngrx/store';
import { User } from '../interfaces/user.interface';
import { UserState } from './users.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
  selectUserState,
  (state: { users: User[]; }) => state.users
);

export const selectLoading = createSelector(
  selectUserState,
  (state: { loading: any; }) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state: { error: any; }) => state.error
);

export const selectUserById = (userId: string) =>
  createSelector(
    selectUsers,
    (users: User[]) => users.find(user => user.id === userId)
);


