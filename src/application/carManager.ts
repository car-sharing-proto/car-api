import { Car } from "../domain/car";
import { CarID } from "../domain/carId";
import { AccessState } from "../domain/enums/accessState";
import { LockState } from "../domain/enums/lockState";
import { RentState } from "../domain/enums/rentState";
import { ICarRepository } from "../domain/interfaces/iCarRepository";

export class CarManager {
    private carRepository: ICarRepository;

    constructor(carRepository: ICarRepository) {
        this.carRepository = carRepository;
    }

    private getCar(carID: CarID): Car {
        let car = this.carRepository.getCarByID(carID);
        return car;
    }

    public setAccesStatus(carID: CarID, accesState: AccessState) {
        let car = this.getCar(carID);
        car.accesState = accesState;
    }

    public setRentStatus(carID: CarID, rentState: RentState) {
        let car = this.carRepository.getCarByID(carID);
        car.rentState = rentState;
    }

    public setLockStatus(carID: CarID, lockState: LockState) {
        let car = this.carRepository.getCarByID(carID);
        car.lockState = lockState;
    }
}