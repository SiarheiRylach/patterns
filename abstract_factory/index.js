'use strict';
const bmwProducer = require('./abstract_factory');

// initializing Abstract factory of sport cars
const produce =  bmwProducer('sport');

// Car producing (Factory)
const myCar = new produce();

console.log(myCar.info());