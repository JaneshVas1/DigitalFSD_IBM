const EventEmitter = require('events');

//const emitter=new EventEmitter();


const StrOps=require('./StringOps');

const strOps = new StrOps();
/*
strOps.addListener('messageLogged',()=>{

    console.log('Handled messageLogged Event');

});
*/
strOps.on('messageLogged',(str)=>{
	console.log('str from on event -> '+ str);

	console.log('Hi');

});

strOps.reverseStr('hello world');



console.log('event executed successfully');