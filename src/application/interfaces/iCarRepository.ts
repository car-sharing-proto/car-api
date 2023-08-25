import { Car } from "../../models/car";
import { CarID } from "../../models/carId";

export interface ICarRepository {
    carIDs : CarID[];
    
    getCar(licensePlate: string): Car | null;
    getCar(carID: CarID): Car | null;
    loadData(): void;
}