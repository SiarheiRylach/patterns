'use strict';

const Tesla = require('./tesla');
const Audi = require('./audi');
const {CarWithAutopilot, CarWithParktronic} = require('./modifiedCar');

let tesla1 = new Tesla();
tesla1 = new CarWithAutopilot(tesla1);
tesla1 = new CarWithParktronic(tesla1);

console.log(tesla1.getPrice(), tesla1.getDescription());

let tesla2 = new Tesla();
tesla2 = new CarWithAutopilot(tesla2);

console.log(tesla2.getPrice(), tesla2.getDescription());

let audi = new Audi();
audi = new CarWithAutopilot(audi);

console.log(audi.getPrice(), audi.getDescription());