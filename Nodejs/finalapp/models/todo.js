const Joi = require('joi');
const mongoose=require('mongoose');

const ToDo=mongoose.model('Todo',new mongoose.Schema({
    toDoName: {
        type: String,
        required:true,
        enum:['Requirement','Analysis','Design','Test','Deploy'],
    },
    isCompleted:
        { type:Boolean,
        default:false
        }
}));

function validateTodo(todo) {
    const schema = {
        toDoName: Joi.string().min(3).required()
    };
    return Joi.validate(todo, schema);
}

exports.ToDo = ToDo;
exports.validate = validateTodo;
