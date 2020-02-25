/*
 * Filename : src/Store/configureStore.js
 */

import {createStore} from "redux";
import toggleFavorite from "./Reducers/favoriteReducer.js"

const configureStore = () => {
    return createStore(toggleFavorite);
};

export default configureStore;