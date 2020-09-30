let lg=require('./Logger');
let lg1=require('./Logger1');
const calc=require('./calculator');

lg.log('test logger');
lg1.log('test logger1');

calc.add();
calc.subtract();
calc.multiply();
calc.divide();

