 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { PassengerCount } from './components/passenger-count/passenger-count.component';
 import { PassengerDetail } from './components/passenger-detail/passenger-detail.component';
 import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'
 import { COMPILER_OPTIONS } from '@angular/core/src/linker/compiler';
 //service 
 import { PassengerDashboardService } from './passenger-dashboard.service';
 @NgModule({
     declarations:[
        PassengerDashboardComponent,
        PassengerCount,
        PassengerDetail
     ],
     imports:[
         CommonModule,
     ],
     exports: [
        PassengerDashboardComponent,
     ],
     providers: [
        PassengerDashboardService
     ]
 })
 export class PassengerDashboardModule {
     
 }