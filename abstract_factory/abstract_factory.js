'use strict';
//Abstract factory
function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}
// Factories
function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new I3();
}

class Z4 {
    info() {
        return 'Z4 is a Sport car!';
    }
}

class I3 {
    info() {
        return 'I3 is a Family car!';
    }
}

module.exports = bmwProducer;