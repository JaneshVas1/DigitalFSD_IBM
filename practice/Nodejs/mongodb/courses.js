//Local connection for mogodb
const mongoose = require('mongoose');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mongoose.connect('mongodb://localhost:27017/play-ground?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(){
        console.log('connected to Mongodb');
    }).catch(err =>{
    console.log('error connecting to Mongodb',err.message);
})

const courseSchema= new mongoose.Schema(
    {
        name: String,
        author: String,
        tags: [String],
        date: Date,
        isPublished: Boolean,
        price: Number

    });


const Courses = mongoose.model('Courses',courseSchema);



async function createCourse(name,author,tags,date,isPublished,price) {
    let course = new Courses();
    course.set({name:name});
    course.set({author:author});
    course.set({tags:tags});
    course.set({date:date});
    course.set({isPublished:isPublished});
    course.set({price:price});
    let result = await course.save();
    console.log(result);
}
async function createCourses(){
        let answers = [];
        r1.question('name? author? tags? isPublished? price?',answer=>{
            answers=answer.split(',');
            createCourse(answers[0],answers[1],answers[2].split(' '),new Date(),answers[3],answers[4]);
            r1.close();
        })

        //createCourse("Test",'Testauthor',['Nodejs','Angular'],new Date(),true,100);




}




async function getCourses() {
    let result = await Courses.find().select('name author price').sort({name:-1});
    console.log('Display Courses'+ result);
}


async function findCoursebyId(id) {
    await Courses.findById(id).select('name author tags').then(function (result) {
        console.log('Display Course details with Id '+ result);
    })
        .catch(error => {
            console.log('Course not found');
        })

}

async function findCoursebyAuthor(authorname) {
    await Courses.find({author: authorname}).then(function (result) {
        console.log('Display Course details with name'+ result);
    })

        .catch(error => {
            console.log('Course not found');
        })

}

async function findPublishedCourses() {
    await Courses.find({isPublished: true}).select('name author price').sort({price:-1}).then(function (result) {
        console.log('Display Published Courses'+ result);
    })

        .catch(error => {
            console.log('Course not found');
        })

}

async function findCoursesGreaterthanPrice(conditionPrice) {
    await Courses.find({price: { $gt: conditionPrice }}).select('name author price').sort({price:-1}).then(function (result) {
        console.log('Display Published Course with Price Condition'+ result);
    })

        .catch(error => {
            console.log('Course not found');
        })

}



async function run()
{

    //createCourses();
    //await getCourses();
    //await findCoursebyId('5f7ee4208c97895808b3fddf');
    //await findCoursebyAuthor('Poi');
    await findPublishedCourses();
    await findCoursesGreaterthanPrice(15);
}

run().then(function (){
    console.log('run executed');
}).catch(error=> {
    console.log('run failed'+error);
});
