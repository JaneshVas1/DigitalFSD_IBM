const http = require('http');

const express=require('express');

const app=express();

app.use(((req, res, next) => {



    console.log('In The Middleware..');

    next();

}));

app.use((req, res, next) => {

    console.log('In Another Middleware...');

    next();

});

app.use((req, res, next) => {

    console.log('In Another(2) Middleware...');

    next();

});



const server = http.createServer(app);

server.listen(3000);