 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { HttpModule } from '@angular/http';
 import { FormsModule } from '@angular/forms';
 //components
 import { PassengerCount } from './components/passenger-count/passenger-count.component';
 import { PassengerDetail } from './components/passenger-detail/passenger-detail.component';
 import { PassengerForm } from './components/passenger-form/passenger-form.component';
 //container
 import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
 import { PassengerViewer } from './containers/passenger-viewer/passenger-viewer.component';


 //service 
 import { PassengerDashboardService } from './passenger-dashboard.service';
 @NgModule({
     declarations:[
        PassengerDashboardComponent,
        PassengerViewer,
        PassengerCount,
        PassengerDetail,
        PassengerForm
     ],
     imports:[
         CommonModule,
         HttpModule,
         FormsModule
     ],
     exports: [
        PassengerDashboardComponent,
        PassengerViewer
     ],
     providers: [
        PassengerDashboardService
     ]
 })
 export class PassengerDashboardModule {
     
 }