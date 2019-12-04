'use strict';

class ConveyorFacade {
    constructor (conveyor) {
        this.conveyor = conveyor;
    }

    assembleCar() {
        this.conveyor.setBody();
        this.conveyor.setEngine();
        this.conveyor.setInterior();
        this.conveyor.setExterior();
        this.conveyor.setWheels();
        this.conveyor.addElectronics();
        this.conveyor.paint();
    }

    changeEngine() {
        this.conveyor.getEngine();
        this.conveyor.setEngine();
    }

    changeInterior() {
        this.conveyor.getInterior();
        this.conveyor.setInterior();
    }
}

module.exports = ConveyorFacade;