import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerfuncService } from './controllerfunc.service';
import { Player1Component } from './player1/player1.component';

import { Player2Component } from './player2/player2.component';

@NgModule({
  declarations: [
    AppComponent,
    Player1Component,
    Player2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ControllerfuncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
