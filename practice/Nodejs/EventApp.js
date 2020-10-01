const EventEmitter = require('events');

const emitter=new EventEmitter();

const logger=require('./EventLogger');

logger.logger('hello world');

//emit event executed in EventLogger but it's unable to receive it here
emitter.on('messageLogged',()=>{

	console.log('Hi');

});

console.log('event executed successfully');