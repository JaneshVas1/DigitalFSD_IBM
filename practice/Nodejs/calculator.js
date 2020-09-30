var result;
function add() {
	var a=20;
	var b=10;
	result=a+b;
    console.log("result "+result);
}
function subtract() {
    var a=20;
	var b=10;
	result=a-b;
    
    console.log("result "+result);
}
function multiply() {
    var a=20;
	var b=10;
	result=a*b;
    
    console.log("result "+result);
}
function divide() {
    var a=20;
	var b=10;
	result=a/b;
    
    console.log("result "+result);
}

module.exports.add=add;
module.exports.subtract=subtract;
module.exports.multiply=multiply;
module.exports.divide=divide;


add();
subtract();
multiply();
divide();

