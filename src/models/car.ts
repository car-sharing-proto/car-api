import {AccessState} from "../enums/access_state";
import {LockState} from "../enums/lock_state";
import {RentState} from "../enums/rent_state"

export class Car {
    readonly licensePlate: string;
    
    accesState: AccessState;
    lockState: LockState;
    rentState: RentState;

    constructor(licensePlate: string) {
        this.licensePlate = licensePlate;
    }
} 