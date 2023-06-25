import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { loadUserDetails, loadUsers } from '../../state/users.actions';
import {
  selectUsers,
  selectLoading,
  selectError,
  selectUserById,
} from '../../state/users.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  users$!: Observable<User[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;
  selectedUser!: any;
  showFiller?: false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.users$ = this.store.select(selectUsers);
    this.store.dispatch(loadUsers());
  }

  selectUser(id: string) {
    this.store.select(selectUserById(id)).subscribe((user: any) => {
      this.selectedUser = user;
      this.store.dispatch(loadUserDetails(user));
    });
  }
}
