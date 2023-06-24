import { NgModule } from '@angular/core';
import { DashboardComponent } from './users/components/dashboard/dashboard.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    AsyncPipe,
    JsonPipe,
    BrowserModule
  ],
  exports: [DashboardComponent],
  providers: [],
})
export class CoreModule {}
