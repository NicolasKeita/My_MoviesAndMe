/*
 * Filename : api/tmdb_api.js
 */

const API_TOKEN = "1139989c99ab608dc215b4b4ec0c4a01";

export function getFilmsFromApiWithSearchedText (text) {
    const url =
        "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
        "&languege=fr&query=" + text;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
