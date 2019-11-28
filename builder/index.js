'use strict';

const CarBuilder = require('./carBuilder');

const myCar = new CarBuilder()
                    .addAutoPilot(true)
                    .addParktronic(true)
                    .updateEngine('V8')
                    .build();

const myNewCar = new CarBuilder()
    .addSignaling(true)
    .updateEngine('V4')
    .build();

console.log(myCar);
console.log(myNewCar);