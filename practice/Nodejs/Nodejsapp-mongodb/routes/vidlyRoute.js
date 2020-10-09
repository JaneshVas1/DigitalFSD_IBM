const express = require('express');
const app = express();
const Joi = require('joi');
const router = express.Router();
const mongoose = require('mongoose');
const genreSchema = {
    name: String
}
const Genre = mongoose.model('genre', genreSchema);


router.post('/', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let genre = new Genre();
    genre.name = req.body.name.toString();
   let result = await genre.save();
    res.send(result);
});
router.get('/',async (req, res) => {
    let result = await Genre.find();
    res.send(result);
})
function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(5).required()
    };
    return Joi.validate(genre, schema);
}


module.exports = router;