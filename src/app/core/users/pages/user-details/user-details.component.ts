import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUserDetails } from '../../state/users.actions';
import { User } from '../../interfaces/user.interface';
import { UserState } from '../../state/users.reducer';
import { selectUser } from '../../state/users.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
  selectedUser?: User;

  constructor(private _store: Store<UserState>) {
    this._store
      .select(selectUser)
      .subscribe((selectedUser) => (this.selectedUser = selectedUser));
  }
}
