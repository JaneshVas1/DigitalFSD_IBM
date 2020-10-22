import { v4 as uuidv4 } from 'uuid';
class ToDo
{
    private todoId:any;
    private todoName:string;
    private isCompleted:boolean;

    constructor(todoId: any ,todoName: string,  isCompleted: boolean) {
        this.todoId=todoId;
        this.todoName = todoName;
        this.isCompleted = isCompleted;
    }
    displayDetails()
    {
        console.log(`${this.todoId} ${this.todoName}  ${this.isCompleted}  `);
    }
}

let temp:any=uuidv4();
let arr:any[]=temp.split('-')
let myTodo=new ToDo(arr[4],'Testing',true);
myTodo.displayDetails();