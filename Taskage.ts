const prmt = require('prompt-sync')();

// class task {
//     private _id: number
//     private task: string

//     constructor(_id: number, task: string) {
//         this._id =
//     }
// }

type Task = string

var tasks: Task[] = []

function addTask(task: Task) {
    tasks.push(task)
}

function removeTask(index: number) {
    tasks.splice(index, 1)
}

function showTasks() {
    console.log('=======TASK LIST=======');
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        console.log(index,task);
    }
    console.log('======================');
}

addTask('Di hoc')
addTask('Di day')
addTask('Hoc bai')
addTask('Tu Dao')

showTasks()

removeTask(2)

showTasks()