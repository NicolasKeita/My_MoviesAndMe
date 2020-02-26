/*
 * Filename : navigation/navigation.js
 */

import React from "react"
import { StyleSheet, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Components/Search.js";
import FilmDetail from "../Components/FilmDetail.js";
import Favorites from "../Components/Favorites";

const SearchStackNavigator = createStackNavigator();

function SearchStack() {
    return (
        <SearchStackNavigator.Navigator
            initialRouteName="Search"
            screenOptions={{ gestureEnabled: false }}
        >
            <SearchStackNavigator.Screen
                name="Search"
                component={Search}
                options={{ title: 'Rechercher' }}
            />
            <SearchStackNavigator.Screen
                name="FilmDetail"
                component={FilmDetail}
            />
        </SearchStackNavigator.Navigator>
    );
}

const FavoritesStackNavigator = createStackNavigator();

function FavoritesStack() {
    return (
        <FavoritesStackNavigator.Navigator
            initialRouteName="Favorites"
            screenOptions={{ gestureEnabled: false }}
        >
            <FavoritesStackNavigator.Screen
                name="Favorites"
                component={Favorites}
                options={{ title: 'Favoris' }}
            />
            <FavoritesStackNavigator.Screen
                name="FilmDetail"
                component={FilmDetail}
            />
        </FavoritesStackNavigator.Navigator>
    );
}

const MoviesTabNavigator = createBottomTabNavigator();

function MyTabs() {
    return (
        <MoviesTabNavigator.Navigator>
            <MoviesTabNavigator.Screen
                name="Search"
                component={ SearchStack }
//                component={ Search }
                /*
                screenOptions={ } => ({
                    tabBarIcon: ({ })
            }}*/
            />
            <MoviesTabNavigator.Screen
                name="Favorites"
                component={ FavoritesStack }
                //component={ Favorites }
            />
        </MoviesTabNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
});

export default MyTabs
