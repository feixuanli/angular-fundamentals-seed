import { Component, OnInit } from '@angular/core'; 
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['./passenger-viewer.component.scss'],
    template: `<div>
    <passenger-form [detail]="passenger"
    (update)="handleUpdate($event)"></passenger-form>
    </div>`
})

export class PassengerViewer implements OnInit{
    passenger: Passenger;
    constructor(private passengerService: PassengerDashboardService){

    }
    ngOnInit() {
        this.passengerService.getPassenger(1)
        .subscribe((passenger: Passenger) => {
            this.passenger = passenger;
        });
    }
    handleUpdate(passenger: Passenger){
        this.passengerService.updatePassengers(passenger)
        .subscribe((data: Passenger) => {
            this.passenger = Object.assign({}, this.passenger, passenger)
        })
    }
}