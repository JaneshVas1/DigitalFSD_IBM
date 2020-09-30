const EventEmitter=require('events');
const emitter  = new EventEmitter();

emitter.addListener('messageLogged', ()=>{
		console.log('message Logged');
	});



emitter.emit('messageLogged');
