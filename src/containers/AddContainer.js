
import { connect } from 'react-redux';
import { addNewTask } from '../actions';
import AddComponent from '../components/AddComponent';
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName));
            console.log(addNewTask(inputTaskName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);