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
