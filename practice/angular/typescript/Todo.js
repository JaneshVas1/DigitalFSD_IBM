"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var ToDo = /** @class */ (function () {
    function ToDo(todoId, todoName, isCompleted) {
        this.todoId = todoId;
        this.todoName = todoName;
        this.isCompleted = isCompleted;
    }
    ToDo.prototype.displayDetails = function () {
        console.log(this.todoId + " " + this.todoName + "  " + this.isCompleted + "  ");
    };
    return ToDo;
}());
var temp = uuid_1.v4();
var arr = temp.split('-');
var myTodo = new ToDo(arr[4], 'Testing', true);
myTodo.displayDetails();
