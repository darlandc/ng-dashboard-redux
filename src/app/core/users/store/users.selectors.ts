import { createFeatureSelector, createSelector, on } from '@ngrx/store';
import { User } from '../interfaces/user.interface';
import { UserState } from './users.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
  selectUserState,
  (state: { users: User[]; }) => state.users
);

// Definir seletor de carregamento
export const selectLoading = createSelector(
  selectUserState,
  (state: { loading: any; }) => state.loading
);

// Definir seletor de erro
export const selectError = createSelector(
  selectUserState,
  (state: { error: any; }) => state.error
);
