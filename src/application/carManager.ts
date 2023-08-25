import { Car } from "../models/car";
import { CarID } from "../models/carId";
import { AccessState } from "../models/enums/accessState";
import { LockState } from "../models/enums/lockState";
import { RentState } from "../models/enums/rentState";
import { ICarRepository } from "./interfaces/iCarRepository";

export class CarManager {
    private carRepository: ICarRepository;

    constructor(carRepository: ICarRepository) {
        this.carRepository = carRepository;
    }

    private getCar(carID: CarID): Car | null {
        let car = this.carRepository.getCar(carID);
        return car;
    }

    public setAccesStatus(carID: CarID, accesState: AccessState) {
        let car = this.getCar(carID);

        if (car) {
            car.accesState = accesState;
        }
    }

    public setRentStatus(carID: CarID, rentState: RentState) {
        let car = this.carRepository.getCar(carID);

        if(car){
            car.rentState = rentState;
        }
    }

    public setLockStatus(carID: CarID, lockState: LockState) {
        let car = this.carRepository.getCar(carID);

        if(car){
            car.lockState = lockState;
        }
    }
}