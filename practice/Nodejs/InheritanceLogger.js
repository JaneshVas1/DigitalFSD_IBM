const EventEmitter = require('events');

class Logger extends EventEmitter

{

    log(message) {

        console.log(message)

        this.emit('messageLogged');

    }

    log1(message)

    {

        console.log(message);

        this.emit('messageLogged1');

    }

}

module.exports=Logger;

