export enum CarBody {
    sedan = 'sedan',
    luxSedan = 'lux-sedan'
}

export enum CarEngine {
    v4 = 'v4 1.8',
    v8 = 'v8 4.8'
}

export enum CarWheels {
    r18 = 'r18',
    r22 = 'r22'
}

export enum CarSalon {
    default = 'default',
    lux = 'lux'
}

export interface ICar {

    body: CarBody;
    engine: CarEngine;
    wheels: CarWheels;
    salon: CarSalon;

    logDetails(): void;

}