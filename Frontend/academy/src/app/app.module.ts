import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AcademyModule } from './academy/academy.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PermissionModule } from './permission/permission.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AcademyModule,
    RouterModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    PermissionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
