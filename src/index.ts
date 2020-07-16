import CarBuilder from './app/builders/CarBuilder';
import CarDirector from './app/directors/CarDirector';

const carDirector = new CarDirector(new CarBuilder());

const defaultCar = carDirector.createDefaultCar();

console.log('Default Car');
defaultCar.logDetails();

const luxCar = carDirector.createLuxCar();

console.log('Lux Car');
luxCar.logDetails();