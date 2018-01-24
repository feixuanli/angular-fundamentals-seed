import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
@Component({
    selector: 'passenger-count',
    template: `
    <div> total checked in: {{checkedInNumber()}} / {{items.length}}</div>
    `
})
export class PassengerCount {
    @Input()
    items: Passenger[];
    checkedInNumber() : number{
        if(!this.items) return;
        return this.items.filter((passenger: Passenger) => {return passenger.checkedIn}).length;
    }
}