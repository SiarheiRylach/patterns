'use strict';

class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCounter() {
        return this.count++;
    }
}

const myCount1 = new Counter();
myCount1.increaseCounter();
myCount1.increaseCounter();
console.log(`myCount1 = ${myCount1.getCount()}`);

const myCount2 = new Counter();
myCount2.increaseCounter();
myCount2.increaseCounter();
console.log(`myCount1 = ${myCount1.getCount()}`);
console.log(`myCount2 = ${myCount2.getCount()}`);