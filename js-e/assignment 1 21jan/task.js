import {validateTitle,validatePriority,validateDueDate} from './validator.js';
const tasks = [];
function addTask(title,priority,dueDate){
    if(!validateDueDate)return false
    if(!validatePriority)return false
    if(!validateTitle)return false
    
    const newTask = {
        taskId : tasks.length + 1,
        t : title,
        p: priority,
        d: dueDate,
        completed : false,
    }
    tasks.push(newTask)
    console.log("added the task!")
}
function getTasks(){
    return tasks;
}
function completeTask(taskId){
    let task = tasks.find(t=>t.taskId === taskId)
    if(task){
        task.completed = true
        return "completed"
    }
}
export {addTask,getTasks,completeTask}