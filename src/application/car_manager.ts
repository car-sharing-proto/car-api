import { Car } from "../models/car";
import { CarID } from "../models/car_id";
import { AccessState } from "../models/enums/access_state";
import { LockState } from "../models/enums/lock_state";
import { RentState } from "../models/enums/rent_state";
import { ICarRepository } from "./interfaces/i_car_repository";
import { ILogger } from "./interfaces/i_logger";

export class CarManager {
    private carRepository: ICarRepository;
    private logger: ILogger;

    constructor(carRepository: ICarRepository) {
        this.carRepository = carRepository;
    }

    private getCar(carID: CarID): Car {
        let car: Car = this.carRepository.getCar(carID);

        if (car == null) {
            // some error handling here
        }

        return car;
    }

    public setAccesStatus(carID: CarID, accesState: AccessState) {
        let car: Car = this.getCar(carID);
        car.accesState = accesState;

        this.logger.log(`Car [${carID}]: access status -> ${car.accesState}`);
    }

    public setRentStatus(carID: CarID, rentState: RentState) {
        let car: Car = this.carRepository.getCar(carID);
        car.rentState = rentState;

        this.logger.log(`Car [${carID}]: rent status -> ${car.rentState}`);
    }

    public setLockStatus(carID: CarID, lockState: LockState) {
        let car: Car = this.carRepository.getCar(carID);
        car.lockState = lockState;

        this.logger.log(`Car [${carID}]: lock status -> ${car.lockState}`);
    }
}