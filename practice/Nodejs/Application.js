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



const emitter2  = new EventEmitter();

emitter2.on('logMessage',(args1,args2)=>{
    console.log(args1);
    console.log(args2);
})

emitter2.emit('logMessage',{id:1,name:'John Doe'},{id:2,name:'Marry Public'})



