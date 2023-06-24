import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { loadUsers } from '../../store/users.actions';
import {
  selectUsers,
  selectLoading,
  selectError,
} from '../../store/users.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  users$!: Observable<User[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.store.dispatch(loadUsers());
  }
}
