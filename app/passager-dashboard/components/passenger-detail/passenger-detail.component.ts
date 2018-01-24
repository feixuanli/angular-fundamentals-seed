import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
@Component({
    selector: 'passenger-detail',
    styleUrls: ['./passenger-detail.component.scss'],
    template: `
    <span class="status" [ngClass]="{'checked-in': detail.checkedIn}">
    </span>
    <div *ngIf="editing">
        <input type="text" 
        [value]="detail.name"
        (input)="onNameChange(name.value)"
        #name
        >
    </div>
    <div *ngIf="!editing">{{detail.name}}</div>
    <div class="date">
        Check in date: 
        {{detail.checkInDate? (detail.checkInDate | date: 'yMMMMd'): 'not checked in yet'}}
    </div>
    <div class ="children">
        Children: {{detail.children?.length || 0 }}
    </div>
    <button (click)="toggleEdit()">
        {{editing? 'done': 'edit'}}
    </button>
    <button (click)="onRemove()">remove</button>
    `
})
export class PassengerDetail implements OnChanges {
    @Input()
    detail: Passenger;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;
    onNameChange(value: string) {
        this.detail.name = value;
    }
    toggleEdit(){
        if(this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
    onRemove(){
        this.remove.emit(this.detail);
    }
    ngOnChanges(changes){
        if(changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }
}