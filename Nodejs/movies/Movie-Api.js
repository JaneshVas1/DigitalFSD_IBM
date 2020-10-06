const express=require('express');
const Joi=require('joi');
const app=express();

app.use(express.json());

let movies=[

    {id:1,name: 'Spiderman',rating: 3},

    {id:2,name: 'X-Men',rating: 4},

    {id:3,name: 'Total Dhamaal',rating: 3}

];

app.get('/api/movies', (req, res) => {

    res.send(movies);



});

//path variable(:id)

app.get('/api/moviesid/:id', (req, res) => {

    let id=parseInt(req.params.id);

    let movie = new Array();
    movie= movies.find(c => c.id === id);

    if (!movie)

        return res.status(404).send(`The movie with the ID ${id} was not found.`);



      // res.send(`the genere with ID ${id} found${movie}`);

       res.send(movie);





})

app.put('/api/movies/:id', (req, res) => {

    const movie = movies.find(c => c.id === parseInt(req.params.id));

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');



    const { error } = validateMovie(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    console.log(movie.name);

    movie.name = req.body.name;

    console.log(movie.name);

    res.send(movie);

});

//path variable(:name)

app.get('/api/moviesname/:name', (req, res) => {

    let name=req.params.name;

    const movie = movies.find(c => c.name.toLowerCase() === name.toLowerCase());

    if (!movie)

        return res.status(404).send(`The movie with the ID ${name} was not found.`);



      // res.send(`the movie with ID ${id} found${movie}`);

       res.send(movie);





})

//path variable(:rating)

app.get('/api/moviesrating/:rating', (req, res) => {

    let rating=req.params.rating;

    const movie = movies.filter(c => c.rating >= rating);

    if (!movie)

        return res.status(404).send(`The movie with the ID ${name} was not found.`);



      // res.send(`the movie with ID ${id} found${movie}`);

       res.send(movie);


})




app.post('/api/movies', (req, res) => {

	
    const { error } = validateMovie(req.body);

    if (error) return res.status(400).send(error.details[0].message);

const movie={

    id:movies.length+1,

    name:req.body.name,

    rating:req.body.rating

};

movies.push(movie);

res.send(movies);



});

let port=process.env.PORT || 3000;

app.listen(port, function(){

    console.log('server started listening on port number',port);

});

function validateMovie(movie) {

    const schema = {

        name: Joi.string().min(5).required(),
        rating: Joi.number().min(1).max(5).required(),

    };



    return Joi.validate(movie, schema);

}