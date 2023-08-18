import {Car} from "../models/car";

let car: Car = new Car("B464KM797");

console.log(car.licensePlate);

export default {
    car : Car,
}