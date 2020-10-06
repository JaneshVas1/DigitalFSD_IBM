const express=require('express');

const app=express();

app.use(express.json());

const adminRoutes=require('./route/admin');

app.use(adminRoutes);

let port=process.env.PORT || 3000;

app.listen(port, function(){

    console.log('server started listening on port number',port);

});

