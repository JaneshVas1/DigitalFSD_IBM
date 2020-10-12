const {ToDo, validate} = require('../models/todo');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const todos = await ToDo.find().sort('name');
    res.send(todos);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let todo = new ToDo({ toDoName: req.body.toDoName });
    todo = await todo.save();
    res.send(todo);
});



router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const todo = await ToDo.findByIdAndUpdate(req.params.id, { toDoName: req.body.toDoName }, {
        new: true
    });



    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.send(todo);
});



router.delete('/:id', async (req, res) => {
    const todo = await ToDo.findByIdAndRemove(req.params.id);
    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.send(todo);
});



router.get('/:id', async (req, res) => {
    const todo = await ToDo.findById(req.params.id);
    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.send(todo);
});

module.exports = router;