import {Car} from "./domain/car";
import { CarID } from "./domain/carId";

let id: CarID = 0;
let car: Car = new Car(id, "B464KM797");

console.log(car.licensePlate);
console.log(car.id);

export default {
    car : Car,
}