import { TOGGLE_ONE_TASK, ADD_NEW_TASK } from '../actions/actionTypes';
const initState = {
    task: []
}
const taskReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return [
                ...state,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]

        case TOGGLE_ONE_TASK:
            let newState = state.map(task => {
                return (task.taskId === action.taskId) ? { ...task, completed: !task.completed } : task;
            })
            return [
                ...state,
                newState
            ]
        default:
            return state;
    }
}
export default taskReducer;
