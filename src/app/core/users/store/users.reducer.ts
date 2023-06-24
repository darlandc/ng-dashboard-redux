import { createReducer, on } from "@ngrx/store";
import { User } from "../interfaces/user.interface";
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUserDetails } from "./users.actions";

export interface UserState {
  users: User[];
  user: User | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  users: [],
  user: undefined,
  loading: false,
  error: undefined
};

// Definir reducer
export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(loadUserDetails, (state, { user }) => ({ ...state, user, loading: false })),
);
