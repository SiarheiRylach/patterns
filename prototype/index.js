'use strict';

const  TeslaCar = require('./teslaCar');

// Produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// Cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Changes for particular auto
car1.interior = 'white';
car1.autopilot = true;

console.log(car1);
console.log(car2);
console.log(car3);