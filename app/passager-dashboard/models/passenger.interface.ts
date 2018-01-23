export interface Passenger {
    id: number,
    name: string,
    checkedIn: boolean,
    checkInDate: number | null,
    children: Child[] | null
}
export interface Child {
    name: string, 
    age: number
}