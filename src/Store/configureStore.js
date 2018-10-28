/*
 * Filename : src/Store/configureStore.js
 */

import {createStore} from "redux";
import toggleFavorite from "./Reducers/favoriteReducer.js"



export default createStore(toggleFavorite)