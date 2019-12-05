'use strict';

class SecuritySystem {
    constructor(carDoor) {
        this.carDoor = carDoor;
    }
    open(password) {
        if (this.authenticate(password)) {
            this.carDoor.open();
        } else {
            console.log('Access denied');
        }
    }

    authenticate(password) {
        return password === 'Ilon';
    }

    close() {
        this.carDoor.close();
    }
}

module.exports = SecuritySystem;