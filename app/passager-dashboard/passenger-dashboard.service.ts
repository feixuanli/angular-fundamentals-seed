import { Passenger } from './models/passenger.interface';
export class PassengerDashboardService {
    constructor(){}
    getPassengers(): Passenger[]{
        return [{
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