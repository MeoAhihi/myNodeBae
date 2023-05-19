var prmt = require('prompt-sync')();
var tasks = [];
function addTask(task) {
    tasks.push(task);
}
function removeTask(index) {
    tasks.splice(index, 1);
}
function showTasks() {
    console.log('=======TASK LIST=======');
    for (var index = 0; index < tasks.length; index++) {
        var task = tasks[index];
        console.log(index, task);
    }
    console.log('======================');
}
addTask('Di hoc');
addTask('Di day');
addTask('Hoc bai');
addTask('Tu Dao');
showTasks();
removeTask(2);
showTasks();
