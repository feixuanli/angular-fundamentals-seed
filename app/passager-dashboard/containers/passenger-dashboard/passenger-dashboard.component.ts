import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Object } from 'core-js/library/web/timers';
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
    (edit)="handleEdit($event)">
    </passenger-detail>
    `
})
export class PassengerDashboardComponent implements OnInit {
    title: string = 'Airline Passengers';
    passengers : Passenger[];
    constructor(private passengerService: PassengerDashboardService){

    }
    ngOnInit(){
        this.passengers  = this.passengerService.getPassengers();
    }
      
    handleRemove(event: Passenger){
        this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id;
        });
    }
    handleEdit(event: Passenger){
        this.passengers = this.passengers.map((passenger: Passenger) => {
            if(passenger.id === event.id) {
                 passenger = event;
            }
            return passenger;
        });
    }
}