import {Car} from "./domain/car";
import { CarID } from "./domain/carId";
import {TestCarRepository} from "../test/testCarRepository";

let id: CarID = 1;

let testCarRepository = new TestCarRepository([
    new Car(0, "B464KM797"),
    new Car(1, "B465KM797"),
    new Car(2, "B466KM797"),
]);
    
let car: Car = testCarRepository.getCarByID(id);

console.log(car.licensePlate);
console.log(car.id);

export default {
    car : Car,
}