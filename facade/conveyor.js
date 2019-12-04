'use strict';

class Conveyor {
    setBody() {console.log('Body set!');}
    getEngine() {console.log('Dismantle Engine!');}
    setEngine() {console.log('Engine set!');}
    setInterior() {console.log('Exterior added!');}
    getInterior() {console.log('Dismantle interior!');}
    setExterior() {console.log('Added interior!');}
    setWheels() {console.log('Wheels!');}
    addElectronics() {console.log('Added electronics!');}
    paint(){console.log('Car painted!');}
}

module.exports = Conveyor;