import {AccessState} from "../enums/access_state";
import {LockState} from "../enums/lock_state";
import {RentState} from "../enums/rent_state";
import {CarID} from "../models/car_id";

export class Car {
    readonly id: CarID;
    readonly licensePlate: string;
    
    accesState: AccessState;
    lockState: LockState;
    rentState: RentState;

    constructor(id:CarID, licensePlate: string) {
        this.licensePlate = licensePlate;
    }
} 