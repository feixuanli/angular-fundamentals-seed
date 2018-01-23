import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
@Component({
    selector: 'passenger-dashboard',
    styleUrls:['./passenger-dashboard.component.scss'],
    template: `
    <passenger-count></passenger-count>
    <passenger-detail></passenger-detail>
    <h1>{{ title }}</h1>
    <div>
        <ul>
            <li *ngFor="let passenger of passengers; let i = index">
                <span class="status" [ngClass]="{'checked-in': passenger.checkedIn}">
                </span>
                {{ i }}. {{passenger.name}}
                <div class="date">
                    Check in date: 
                    {{passenger.checkInDate? (passenger.checkInDate | date: 'yMMMMd'): 'not checked in yet'}}
                </div>
                <div class ="children">
                    Children: {{passenger.children?.length || 0 }}
                </div>
            </li>
        </ul>
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    title: string = 'Airline Passengers';
    passengers : Passenger[];
    ngOnInit(){
        this.passengers  = [{
            id: 1, 
            name: 'Stephen',
            checkedIn: true,
            checkInDate: null,
            children: null
        }, 
        {
            id: 2, 
            name: 'rose',
            checkedIn: false,
            checkInDate: null,
            children: [{
                name: 'xiaoming',
                age: 5,
            }]
        }
      
    ]
    }
}