/*
 * Filename : navigation/navigation.js
 */

import { createStackNavigator } from "react-navigation";
import Search from "../components/search.js";
import FilmDetail from "../components/film_detail.js";

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