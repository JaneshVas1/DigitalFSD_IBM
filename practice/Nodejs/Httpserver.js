
//http is a node core module

const http = require('http');

/*const server=http.createServer();

server.on('connection',function (socket) {

    console.log(socket);

})
*/

const server=http.createServer((req, res) => {

    console.log(req.url);

   console.log(req.headers);

    console.log(req.method);

    res.setHeader('content-type','text/html');
    res.write('<html><head></head><body><h1> Welcome to node</h1></body></html>');
    res.write('<h2> Your name is John Doe</h2>');
    res.write('<h4> New world Looks Amazing</h4></body></html>');
    res.end();

    })


//if we do not provide the port number by default the port is 8080

server.listen(3000);

console.log('node server started on port 3000');






