import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { loadUserDetails } from '../../state/users.actions';
import { selectUserById } from '../../state/users.selectors';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent {
  @Input() users$?: Observable<any>;

  constructor(private store: Store) {}

  selectUser(id: string) {
    this.store.select(selectUserById(id)).subscribe((user: any) => {
      this.store.dispatch(loadUserDetails(user));
    });
  }

}
