import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [UsersModule, AsyncPipe, JsonPipe, BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
