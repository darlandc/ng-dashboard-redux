import { NgModule } from '@angular/core';
import { DashboardComponent } from './users/components/dashboard/dashboard.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';

@NgModule({
  declarations: [DashboardComponent, UserDetailsComponent],
  imports: [
    AsyncPipe,
    JsonPipe,
    BrowserModule
  ],
  exports: [DashboardComponent, UserDetailsComponent],
  providers: [],
})
export class CoreModule {}
