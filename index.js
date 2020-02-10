const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log(`Sum of ${num1} + ${num2} = ${num1 + num2}`);
// });

// eventEmitter.emit('tutorial', 7, 7);


class Person extends EventEmitter {
    constructor(name) {
        super()

        this._name = name
    }

    get name() {
        return this._name
    }
}
let pedro = new Person('Pedro')
let christina = new Person('Christina')

const printName = (action) => {
    switch (action) {
        case 'Christina':
            console.log('My name is amazing: ' + christina.name);
            break;

        case 'Pedro':
            console.log('My name is : ' + pedro.name);
        break
    }
}

pedro.on('name', printName)
christina.on('name', printName)

pedro.emit('name','Pedro')
christina.emit('name','Christina')