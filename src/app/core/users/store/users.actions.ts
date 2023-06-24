import { createAction } from "@ngrx/store";
import { User } from "../interfaces/user.interface";

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction('[Users] Load Users Success', (users: User[]) => ({ users }));
export const loadUsersFailure = createAction('[Users] Load Users Failure', (error: any) => ({ error }));
export const loadUserDetails = createAction('[Users] Load Users Details', (user: User) => ({ user }));
