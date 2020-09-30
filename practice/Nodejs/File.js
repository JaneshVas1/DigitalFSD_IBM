console.log("here");


const fs = require('fs');
let file_details=fs.readdirSync('./');
console.log(file_details);
let file_detailsasync=fs.readdir('./',function(err,data) {
});
console.log(file_details);
file_detailsasync=fs.readdir('../test',function(err,data) {
	if (err)
		console.log("Provided path is wrong"+err);
	else
		console.log(data);
});
//Lambda function same logic
file_detailsasync=fs.readdir('../test',(err,data)=> {
	if (err)
		console.log("Provided path is wrong"+err);
	else
		console.log(data);
});

console.log("here");
const path=require('path');
let x= path.parse(__filename);
let y=path.parse(__dirname);
console.log('x= '+x);
console.log('y='+y);






