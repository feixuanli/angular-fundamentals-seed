import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
@Component({
    selector: 'passenger-form',
    styleUrls:['./passenger-form.component.scss'],
    template:`
    <div>
    {{detail | json}} 
    </div>
    <form #form="ngForm" novalidate>
    passenger name: 
    <input type = "text" name="name" 
    [ngModel]="detail?.name"
    >
    passenger id: 
    <input type = "number" name="id" 
    [ngModel]="detail?.id"
    >
    <div>
    Checked In : 
        <label>
            <input type = "radio" [value]="true" name="checkedin"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckedIn($event)">
        </label>
        <label>
            <input type = "radio" [value]="false" name="checkedin"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckedIn($event)">
        </label>
    </div>
    </form>

    {{form.value | json}}
    `
})
export class PassengerForm {
    @Input()
    detail: Passenger;
    toggleCheckedIn(event){
        if(event) {
            this.detail.checkInDate =  Date.now();
        }
    }
}