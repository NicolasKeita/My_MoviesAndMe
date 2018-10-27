/*
 * Filename : navigation/navigation.js
 */

import { createStackNavigator } from "react-navigation";
import Search from "../Components/Search.js";
import FilmDetail from "../Components/film_detail.js";

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

export default SearchStackNavigator
