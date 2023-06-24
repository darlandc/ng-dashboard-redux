import { NgModule } from '@angular/core';
import { DashboardComponent } from './users/components/dashboard/dashboard.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { ListingComponent } from './users/pages/listing/listing.component';

@NgModule({
  declarations: [DashboardComponent, UserDetailsComponent, ListingComponent],
  imports: [
    AsyncPipe,
    JsonPipe,
    BrowserModule
  ],
  exports: [DashboardComponent, UserDetailsComponent, ListingComponent],
  providers: [],
})
export class CoreModule {}
