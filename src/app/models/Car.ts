import { ICar, CarBody, CarEngine, CarSalon, CarWheels } from ".";

export default class Car implements ICar {

    body: CarBody;
    engine: CarEngine;
    wheels: CarWheels;
    salon: CarSalon;

    public logDetails(): void {
        console.log(`Body: ${this.body}`);
        console.log(`Engine: ${this.engine}`);
        console.log(`Wheels: ${this.wheels}`);
        console.log(`Salon: ${this.salon}`);
    }

}