import { NgModule } from '@angular/core';
import { DashboardComponent } from './users/components/dashboard/dashboard.component';
import { AsyncPipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users/store/users.effects';
import { usersReducer } from './users/store/users.reducer';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    AsyncPipe,
    StoreModule.forRoot({ users: usersReducer }),
    EffectsModule.forRoot([UsersEffects])
  ],
  exports: [DashboardComponent],
  providers: [],
})
export class CoreModule {}
