import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from '../actions/actionTypes';
let initTaskId = 0;
//action :'add new task'
const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: initTaskId++,
        taskName: inputTaskName

    }
}
//action :'toggle 1 task to completed / incompleted
const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId
    }
}
export { addNewTask, toggleTask };