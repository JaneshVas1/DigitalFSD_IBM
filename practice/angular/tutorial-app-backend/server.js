const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect('mongodb://localhost:27017/play-ground')
    .then(()=> {
        console.log('connection established');
    }).catch(err=>{
    console.log('error connecting');
});

let schema = mongoose.Schema(
    {
        title: String,
        description: String,
        published: {type:Boolean, default:false}
    }
);

let Tutorial = mongoose.model("tutorial", schema);

let corsOptions = {
    origin: "http://localhost:4200"
};



app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//post
app.post('/api/tutorials', (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    tutorial.save(tutorial).then((data)=>{
        res.send(data);
    }).catch(error=>{
        console.log('error');
    });
});



app.get('/api/tutorials',(req, res) => {
    Tutorial.find(req.params.id).then((tutorial)=>{
        res.send(tutorial);
    }).catch(error=>{
        console.log('error');
    })
})

app.listen(3000);