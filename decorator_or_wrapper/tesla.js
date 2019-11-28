'use strict';

const Car = require('./car');

class Tesla extends Car{
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

module.exports = Tesla;