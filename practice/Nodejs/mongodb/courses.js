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
    await Courses.find({price: { $gte: conditionPrice }}).select('name author price').sort({price:-1}).then(function (result) {
        console.log('Display Published Course with Price Condition'+ result);
    })

        .catch(error => {
            console.log('Course not found');
        })

}

async function findPublishedCoursesGreaterthanPrice(conditionPrice) {
    await Courses.find({price: { $gte: conditionPrice }}).and({isPublished: false}).select('name author price').sort({price:-1}).then(function (result) {
        console.log('Display Published Course with Price Condition'+ result);
    })

        .catch(error => {
            console.log('Course not found');
        })

}


async function getConditionCourses() {

    return Courses

        .find({isPublished: true})

        .or(
            [{name: {$regex: /by/}},
            {price: { $gte: 12 }},
                //or condition working {author: /M.*/i }
            ])
        .and({author: /M.*/i })


        .sort('-price')

        .select('name author price tags isPublished');

}

async function updateCourse(name,author) {


   const course = await Courses.findById('5f7ff2551fee9229ac95c058');
   //const course = await Courses.find({author: 'Mary'});
    if (!course) {
        console.log('not found');
        return;
    }
    console.log(course);
    //course.name=name;
    //course.author=author;
    course.set({name:name});
    course.set({author:author});
    console.log(course);
    await course.save().then(() => {
        console.log('Course updated');
    });



}

async function updateCourses()
{
    //it updates all record
    const result = await Courses.updateMany({ author: 'Mosh' }, {
        $set: { name: 'Learning Cricket',tags: ['test','test2']}
    });
    console.log('course update success');
}
async function updateCourse()
{
    //it updates only first record
    const result = await Courses.update({ isPublished: true }, {
        $set: { name: 'Spring'}
    });
    console.log('course update success');
}


//update first
async function updateCourse(id)
{
    let course = await Courses.findByIdAndUpdate({_id: id}, {
        $set: {name: 'Learning Angular', author: 'Mr. Balaguruswamy'}
    },{new:false});
    console.log(course);
}



async function run()
{

    //createCourses();
    //await getCourses();
    //await findCoursebyId('5a68ff090c553064a218a547');
    //await findCoursebyAuthor('Mary');
    //await findPublishedCourses();
    //await findCoursesGreaterthanPrice(15);
    //await findPublishedCoursesGreaterthanPrice(15);

   /* const courses = await getConditionCourses();

    console.log(courses);*/

    //await updateCourse('Spring','Red Johnson');

    //update multiple courses
    /*updateCourses().then(() =>{
        console.log('success');
    });*/

    //update one course
    /*updateCourse().then(() =>{
        console.log('success');
    });*/
    //update course by ID with return others return void
    updateCourse('5f7ff2551fee9229ac95c05c').then(() => {
        console.log('success');
    })
}

run().then(function (){
    console.log('run executed');
}).catch(error=> {
    console.log('run failed'+error);
});
