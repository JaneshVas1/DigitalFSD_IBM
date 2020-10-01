const EventEmitter = require('events');

const Logger=require('./Inheritancelogger');

const logger=new Logger();

logger.log('calling log method from logger module');

logger.log1('calling log1 method from logger module');

logger.addListener('messageLogged',()=>{

    console.log('Handled messageLogged Event');

});

logger.addListener('messageLogged',()=>

{

   console.log('Handled messageLogged1 Event');

});



logger.log('=======END=======');