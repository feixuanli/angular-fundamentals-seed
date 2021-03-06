import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Object } from 'core-js/library/web/timers';
import { Router } from '@angular/router';
import { PassengerDashboardService } from '../../passenger-dashboard.service'
@Component({
    selector: 'passenger-dashboard',
    styleUrls:['./passenger-dashboard.component.scss'],
    template: `
    <h1>{{ title }}</h1>
    <passenger-count [items]="passengers">
    </passenger-count>
    <div *ngFor="let passenger of passengers">
        {{passenger.name}}
    </div>
    <passenger-detail *ngFor="let passenger of passengers" 
    [detail]="passenger" 
    (remove)="handleRemove($event)"
    (edit)="handleEdit($event)"
    (view)="handleView($event)">
    </passenger-detail>
    `
})
export class PassengerDashboardComponent implements OnInit {
    title: string = 'Airline Passengers';
    passengers : Passenger[];
    constructor(
        private router: Router,
        private passengerService: PassengerDashboardService){

    }
    handleView(event: Passenger) {
        this.router.navigate(['passengers', event.id]);
    }
    ngOnInit(){
        this.passengerService
        .getPassengers().subscribe(
            (data: Passenger[]) => {
                this.passengers = data;
            }
        );
    }
      
    handleRemove(event: Passenger){
        this.passengerService.removePassengers(event).subscribe(
            (passenger: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id;
                });
            }
        );
    }
    handleEdit(event: Passenger){
        this.passengerService.updatePassengers(event).subscribe(
            (passenger: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if(passenger.id === event.id) {
                         passenger = event;
                    }
                    return passenger;
                })});}  
}