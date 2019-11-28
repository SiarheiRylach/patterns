'use strict';

const Car = require('./car');

class Audi extends Car{
    constructor() {
        super();
        this.price = 20000;
        this.model = 'Audi';
    }
}

module.exports = Audi;