/*
 * Filename : index.js
 */

import React from 'react'
import { Provider } from "react-redux"
import configureStore from './src/Store/configureStore.js'
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";

const Store = configureStore();

const My_App = () => (
    <Provider store={ Store }>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => My_App);
