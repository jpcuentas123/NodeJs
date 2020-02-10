const events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('tutorial', () => {
  console.log('data received succesfully.');
});

eventEmitter.emit('tutorial');
