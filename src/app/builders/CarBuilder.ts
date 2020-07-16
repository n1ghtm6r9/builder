import Car from '../models/Car';
import { IBuilder } from '.';
import { CarBody, CarEngine, CarWheels, CarSalon, ICar } from '../models';

export default class CarBuilder implements IBuilder {

    private _car: ICar;

    constructor() {
        this.reset();
    }

    public buildBody(body: CarBody): void {
        this._car.body = body;
    }

    public buildEngine(engine: CarEngine): void {
        this._car.engine = engine;
    }

    public buildWheels(wheels: CarWheels): void {
        this._car.wheels = wheels;
    }

    public buildSalon(salon: CarSalon): void {
        this._car.salon = salon;
    }

    public getCar() {
        const car = this._car;

        this.reset();

        return car;
    }

    private reset() {
        this._car = new Car();
    }

}