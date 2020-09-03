import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'


export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }
    render() {
        return (
            <View style={styles.header}>

                <TextInput style={styles.txtInput} placeholder="Nhập công việc" onChangeText={(text) => {
                    this.setState({ inputText: text })
                }} />
                <TouchableHighlight style={styles.btn} underlayColor='blue' onPress={(event) => {
                    if (!this.state.inputText.trim()) return;
                    this.props.onClickAdd(this.state.inputText);
                }}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        // position: 'absolute', top: 0,
        margin:20,
        flexDirection: 'row',
        // justifyContent: "center",
        // alignItems: "center"
    },
    txtInput: {
        flex: 8,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10
    },
    btn:
    {
        flex: 2,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'green',

    }
    ,
    btnText: {
        textAlign: 'center',
        color: 'white'
    }
})



