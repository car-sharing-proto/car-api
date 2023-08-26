import { Car } from "../car";
import { CarID } from "../carId";

export interface ICarRepository {
    getCarByLicensePlate(licensePlate: string): Car;
    getCarByID(carID: CarID): Car;
}