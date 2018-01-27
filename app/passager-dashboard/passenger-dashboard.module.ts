 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { HttpModule } from '@angular/http';
 import { FormsModule } from '@angular/forms';
 import { RouterModule, Routes } from '@angular/router';
 //components
 import { PassengerCount } from './components/passenger-count/passenger-count.component';
 import { PassengerDetail } from './components/passenger-detail/passenger-detail.component';
 import { PassengerForm } from './components/passenger-form/passenger-form.component';
 //container
 import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
 import { PassengerViewer } from './containers/passenger-viewer/passenger-viewer.component';
 //service 
 import { PassengerDashboardService } from './passenger-dashboard.service';
 
 const routes: Routes = [{
     path: 'passengers',
     children: [
         {path: '', component: PassengerDashboardComponent},
         {path: ':id', component: PassengerViewer}
     ]
     
 }];
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
         FormsModule,
         RouterModule.forChild(routes)
     ],
     exports: [
        PassengerViewer
     ],
     providers: [
        PassengerDashboardService
     ]
 })
 export class PassengerDashboardModule {
     
 }