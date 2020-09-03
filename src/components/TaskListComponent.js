import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native'

export default class TaskListComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.state)
        return (

            <View style={style.container}>
                <FlatList data={this.props.state}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={style.itemText}>
                                <Text>{item.taskId}. </Text>
                                <Text>{item.taskName}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.taskId.toString()}
                    key={(item) => item.taskId}
                />
            </View>


        )
    }
}
const style = StyleSheet.create({
    container: {
        margin: 20
    },
    itemText: {
        margin: 5,
        flexDirection:'row'
    }
})