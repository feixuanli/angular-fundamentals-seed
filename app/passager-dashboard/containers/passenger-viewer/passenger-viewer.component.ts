import { Component, OnInit } from '@angular/core'; 
import  {Router, ActivatedRoute, Params} from '@angular/router';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';
import 'rxjs/add/operator/switchMap'
@Component({
    selector: 'passenger-viewer',
    styleUrls: ['./passenger-viewer.component.scss'],
    template: `<div>
    <button (click)="goBack()"> go back</button>
    <passenger-form 
    [detail]="passenger"
    (update)="handleUpdate($event)"
    ></passenger-form>
    </div>`
})

export class PassengerViewer implements OnInit{
    passenger: Passenger;
    constructor(private router: Router, 
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService){

    }
    ngOnInit() {
        this.route.params
        .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
        .subscribe((passenger: Passenger) => this.passenger = passenger);
    }
    handleUpdate(passenger: Passenger){
        this.passengerService.updatePassengers(passenger)
        .subscribe((data: Passenger) => {
            this.passenger = Object.assign({}, this.passenger, passenger)
        })
    }
    goBack(){
        this.router.navigate(['passengers'])
    }
}