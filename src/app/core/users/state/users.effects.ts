import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../services/users.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => loadUsersSuccess(users)),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
