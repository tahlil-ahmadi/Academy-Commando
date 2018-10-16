import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcademyModule } from './academy/academy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AcademyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
