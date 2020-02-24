/*
 * Filename : App.js
 */

import React from 'react'
import Navigation from "./src/Navigation/Navigation.js"
import {Provider} from "react-redux"
import Store from './src/Store/configureStore.js'

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
AppRegistry.registerComponent(appName, () => App);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <Navigation/>
            </Provider>
        );
    }
}
