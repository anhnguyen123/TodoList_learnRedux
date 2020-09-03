/**
 * @format
 */
import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import TaskManagerComponent from './src/components/taskManagerComponent';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from './src/reducers';

let store = createStore(allReducer);

const App = () => {
    return (
        <Provider store={store}>
            <TaskManagerComponent />
        </Provider>
    )
}



AppRegistry.registerComponent(appName, () => App);
