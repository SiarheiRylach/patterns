'use strict';

const SecuritySystem = require('./securitySystem');
const CarAccess = require('./carAccess');

const door = new SecuritySystem(new CarAccess());

door.open('Jack');
door.open('Ilon');

door.close();