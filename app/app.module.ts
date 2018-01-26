import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PassengerDashboardModule } from './passager-dashboard/passenger-dashboard.module'
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

@NgModule({
  declarations:[AppComponent],
  imports:[
    CommonModule,
    BrowserModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}