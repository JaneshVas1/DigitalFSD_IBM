//Local connection for mogodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log('connected to Mongodb');
}).catch(err =>{
    console.log('error connecting to Mongodb',err.message);
})


//Atlas connection for my google atlas account
/*
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:nKUJQhFHtI7UrlAM@cluster0.skdlm.mongodb.net/play-ground?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log('connected to Mongodb Atlas');
}).catch(err =>{
    console.log('error connecting to Mongodb',err.message);
})
*/

/*
//Atlas connection for Nilay google account
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:12345@cluster0.xclqi.gcp.mongodb.net/play-ground?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log('connected to Mongodb Atlas');
}).catch(err =>{
    console.log('error connecting to Mongodb',err.message);
})
*/
