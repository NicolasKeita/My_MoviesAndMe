/*
 * Filename : api/tmdb_api.js
 */

const API_TOKEN = "1139989c99ab608dc215b4b4ec0c4a01";

export function getImageFromApi (name) {
    return ("https://image.tmdb.org/t/p/w300" + name)
}

export function getFilmsFromApiWithSearchedText (text, page) {
    const url =
        "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
        "&language=fr&query=" + text + "&page=" + page;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getFilmDetailFromApi (id) {
    const url =
        "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_TOKEN +
        "&language=fr";
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
