import { Car } from "../../models/car";
import { CarID } from "../../models/car_id";

export interface ICarRepository {
    carIDs : CarID[];
    
    getCar(licensePlate: string): Car;
    getCar(carID: CarID): Car;
    loadData(): void;
}