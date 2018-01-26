import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';
@Component({
    selector: 'passenger-form',
    styleUrls:['./passenger-form.component.scss'],
    template:`
    <div>
    {{detail | json}} 
    </div>
    <form #form="ngForm" novalidate>
    <div>
    passenger name: 
    <input type = "text" name="name"  
    [ngModel]="detail?.name"
    #name = "ngModel"
    required
    >
    <div *ngIf="name.errors && name.dirty" class="errors">
        passenger name is required
    </div>
    </div>
    <div>
    passenger id: 
    <input type = "number" name="id" 
    [ngModel]="detail?.id"
    >
    </div> 
    <div>
    Checked In : 
        <label>
            <input type = "checkbox" [value]="true" name="checkedin"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckedIn($event)">
        </label>
    </div>
    <div *ngIf="form.value.checkedin">
        check in date: 
        <input type="number"
        name="checkedInDate"
        [ngModel]="detail?.checkInDate"
        >
    </div>
    <div>
        Luggage: 
        <select name="baggage" [ngModel]="detail?.baggage">
            <option *ngFor="let item of baggage"
            [selected]="item.key === detail?.baggage">
            {{item.value}}
            </option>
        </select>
    </div>
    <button type="submit" [disabled]="form.invalid"> update passenger </button>


    </form>
    <div>
        {{ form.value | json }}
    </div>
    <div>
        valid: {{ form.valid | json }}
    </div>
    <div>
         invalid: {{ form.invalid | json }}
    </div>
    `
})
export class PassengerForm {
    @Input()
    detail: Passenger;

    baggage: Baggage[] = [{ 
        'key': 'none',
        'value': "no baggage"
     },
     { 
        'key': 'hand-only',
        'value': "hand baggage"
     },
     { 
        'key': 'hold-only',
        'value': "hold baggage"
     },
     { 
        'key': 'both',
        'value': "both baggage"
     },];

    toggleCheckedIn(event){
        if(event) {
            this.detail.checkInDate =  Date.now();
        }
    }
}