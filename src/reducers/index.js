import taskReducer from '../reducers/taskReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    taskReducer
})
export default allReducer;