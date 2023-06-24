import { AsyncPipe, JsonPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ListingComponent } from './pages/listing/listing.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [DashboardComponent, UserDetailsComponent, ListingComponent, SideNavComponent],
  imports: [AsyncPipe, JsonPipe, BrowserModule, MatSidenavModule],
  exports: [DashboardComponent, UserDetailsComponent, ListingComponent, SideNavComponent],
  providers: [],
})
export class UsersModule {}
