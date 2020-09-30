const EventEmitter=require('events');
const emitter  = new EventEmitter();

emitter.addListener('messageLogged', ()=>{
		console.log('message Logged');
	});



emitter.emit('messageLogged');

const emitter1  = new EventEmitter();

emitter1.on('addTwonumbers',(first,second)=>{
	console.log(`Addition of ${first} and  ${second} is ${first+second}`);
});

emitter1.on('addThreenumbers',(first,second,third)=>{
	console.log(`Addition of ${first} ,  ${second} and ${third} is ${first+second+third}`);
});


emitter1.emit('addTwonumbers',200,50);
emitter1.emit('addThreenumbers',200,50,30);



