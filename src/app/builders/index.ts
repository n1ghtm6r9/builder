import { CarBody, CarEngine, CarWheels, CarSalon, ICar } from "../models";

export interface IBuilder {

    buildBody(body: CarBody): void;
    buildEngine(engine: CarEngine): void;
    buildWheels(wheels: CarWheels): void;
    buildSalon(salon: CarSalon): void;
    getCar(): ICar;

}