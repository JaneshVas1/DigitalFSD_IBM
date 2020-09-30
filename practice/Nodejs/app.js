let lg=require('./Logger');
let lg1=require('./Logger1');
const calc=require('./calculator');

lg.log('test logger');
lg1.log('test logger1');

calc.add();
calc.subtract();
calc.multiply();
calc.divide();

const os = require('os');
let release=os.release();
let platform=os.platform();
let arc=os.arch();
let hostName=os.hostname();
let freeMem=os.freemem();
let homeDir=os.homedir()
let networkInterfaces=os.networkInterfaces();
console.log(`${release} ${platform} ${arc} ${os.hostname()}`);


