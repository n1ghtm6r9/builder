import { IBuilder } from "../builders";
import { CarBody, CarEngine, CarSalon, CarWheels, ICar } from "../models";

export default class CarDirector {

    constructor(private _builder: IBuilder) {

    }

    public createDefaultCar(): ICar {

        this._builder.buildBody(CarBody.sedan);
        this._builder.buildEngine(CarEngine.v4);
        this._builder.buildSalon(CarSalon.default);
        this._builder.buildWheels(CarWheels.r18);

        return this._builder.getCar();

    }


    public createLuxCar(): ICar {

        this._builder.buildBody(CarBody.luxSedan);
        this._builder.buildEngine(CarEngine.v8);
        this._builder.buildSalon(CarSalon.lux);
        this._builder.buildWheels(CarWheels.r22);

        return this._builder.getCar();

    }

}