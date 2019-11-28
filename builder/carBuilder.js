'use strict';

const Car = require('./car');

class CarBuilder {
    constructor () {
        this.car = new Car();
    }

    addAutoPilot(autopilot){
        this.car.autoPilot = autopilot;
        return this;
    }

    addParktronic(parktronic){
        this.car.parktronic = parktronic;
        return this;
    }

    addSignaling(signaling){
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

module.exports = CarBuilder;