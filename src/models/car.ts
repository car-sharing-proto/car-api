import {State} from "../enums/state";

export class Car {
    readonly licensePlate: string;
    
    state: State;

    constructor(licensePlate: string) {
        this.licensePlate = licensePlate;
    }
} 