'use strict';

const Bmw = require('./bmw');

class BmwFactory {
    static create(type) {
        if (type === 'X5') {
            return new Bmw(type, 108000, 300)
        }
        if (type === 'X6') {
            return new Bmw(type, 111000, 320)
        }
        throw new Error('This type of Bmw doesn\'t exist');
    }
}


const x5 = BmwFactory.create('X5');
const x6 = BmwFactory.create('X6');

console.log(x5, x6);