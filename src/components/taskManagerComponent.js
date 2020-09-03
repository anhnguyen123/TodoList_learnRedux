import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';

export default class taskManagerComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddContainer/>
                <TaskListContainer/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
       
    }
})
