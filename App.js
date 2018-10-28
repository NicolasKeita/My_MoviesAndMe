/*
 * Filename : App.js
 */

import React from 'react'
import Navigation from "./src/Navigation/Navigation.js"
import {Provider} from "react-redux"
import Store from './src/Store/configureStore.js'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <Navigation/>
            </Provider>
        );
    }
}
