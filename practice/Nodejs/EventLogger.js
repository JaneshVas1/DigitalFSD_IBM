const EventEmitter = require('events');

const emitter=new EventEmitter();

console.log('trying to initialize an event');

function logger(message)

{

    console.log('logger message is: ',message);

    emitter.emit('messageLogged');

}

module.exports.logger=logger;