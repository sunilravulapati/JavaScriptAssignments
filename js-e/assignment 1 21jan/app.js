import {addTask,getTasks,completeTask} from './task.js'

addTask('Gym','low','2026-01-12')
addTask('Groceries','high','2026-01-21')
addTask('Take pet to the vet','medium','2026-01-19')
console.log(getTasks())

completeTask(2)
console.log("after completing the tasks")
console.log(getTasks())
