

import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';

const mapStateToProps = (state) => {
    return {
        state: !state.taskReducer ? [] : state.taskReducer,
    }
}
const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer