import {AccessState} from "./enums/accessState";
import {LockState} from "./enums/lockState";
import {RentState} from "./enums/rentState";
import {CarID} from "./carId";

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