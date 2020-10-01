const EventEmitter = require('events');

class StringOps extends EventEmitter
{

    reverseStr(message) {

        console.log(message);
        let str='';
        for (let i=message.length-1;i>=0;i--)
        	str=str+message[i];

        console.log('reverse  in StringOps  '+ str);
        this.emit('messageLogged',str);
    };
}

module.exports=StringOps;
