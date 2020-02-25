/*
 * Filename : App.js
 */

import React from 'react';
import MyTabs from "./src/Navigation/Navigation.js"
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

