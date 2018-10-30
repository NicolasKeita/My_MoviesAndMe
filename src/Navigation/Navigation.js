/*
 * Filename : navigation/navigation.js
 */

import React from "react"
import {StyleSheet, Image} from "react-native"
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Search from "../Components/Search.js";
import FilmDetail from "../Components/FilmDetail.js";
import Favorites from "../Components/Favorites";

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return (
                        <Image
                            source={require("../../assets/Images/ic_search.png")}
                            style={styles.icon}/>
                    )
                }
            }
        },
        Favorites: {
            screen: Favorites,
            navigationOptions: {
                tabBarIcon: () => {
                    return (
                        <Image
                            source={require("../../assets/Images/ic_favorite.png")}
                            style={styles.icon}/>
                    )
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: "#DDDDDD",
            inactiveBackgroundColor: "#FFFFFF",
            showLabel: false,
            showIcon: true
        }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default MoviesTabNavigator
