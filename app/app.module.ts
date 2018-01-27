import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PassengerDashboardModule } from './passager-dashboard/passenger-dashboard.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path:'',
  redirectTo: 'passengers',
  pathMatch: 'full'
},
{
  path: '**',
  component: NotFoundComponent,
}]

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports:[
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}