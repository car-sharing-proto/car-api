import {Car} from "./domain/car";
import { CarID } from "./domain/carId";
import {TestCarRepository} from "../test/testCarRepository";
import {CarManager} from "./application/carManager"
import { AccessState } from "./domain/enums/accessState";

let testCarRepository = new TestCarRepository([
    new Car(0, "B464KM797"),
    new Car(1, "B465KM797"),
    new Car(2, "B466KM797"),
]);

let id: CarID = 1;
let car: Car = testCarRepository.getCarByID(id);
let carManager = new CarManager(testCarRepository);
    
console.log(car.licensePlate);
console.log(AccessState[car.accesState]);

carManager.setAccesStatus(id, AccessState.RequireService);

console.log(car.licensePlate);
console.log(AccessState[car.accesState]);

export default {
    car : Car,
}