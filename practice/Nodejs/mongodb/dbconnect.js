
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




//Local connection for mogodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log('connected to Mongodb');
}).catch(err =>{
    console.log('error connecting to Mongodb',err.message);
})


const studentSchema= new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        doj: {type: Date, default: Date.now()}
    });


const Student = mongoose.model('Student',studentSchema);
/*
let student=new Student(
    {
        firstName: "John",
        lastname: "Doe",
        email: "jhemail@mil.com"

    }
)

async function createStudent(){
    let result = await student.save();
    console.log(result);

}

createStudent()
    .then(function (){
    console.log('Student created: ');
}).catch(error => {
    console.log('Error creating student:',error.message);
});


 */

async function getStudents() {
    let result = await Student.find();
    console.log('Display Students'+ result);
}

async function run()
{
    await getStudents();
}

run().then(function (){

}).catch(error=> {

});



