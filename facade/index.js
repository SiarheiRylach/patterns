'use strict';

const Conveyor = require('./conveyor');
const ConveyorFacade = require('./conveyorFacade');

const conveyor = new ConveyorFacade(new Conveyor());

conveyor.assembleCar();
conveyor.changeEngine();
conveyor.changeInterior();