/*
 * Filename : Component/FilmDetail.js
 */

import React from "react"
import moment from "moment"
import numeral from "numeral"
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    Image,
    TouchableOpacity,
    Share,
    Alert,
    Platform
} from "react-native"
import {connect} from "react-redux"
import {getFilmDetailFromApi, getImageFromApi} from "../API/tmdb_api"

class FilmDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        }
    }
    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }
    static _formatReleaseDate(releaseDate) {
        return (moment(releaseDate, "YYYY-MM-DD").format("DD/MM/YYYY"));
    }
    static _formatBudget(budget) {
        return (numeral(budget).format("0,0[.]00$"));
    }
    static _getGenres(genresArray) {
        let genres = "";

        if (genresArray.length === 0)
            return ("inconnu");
        genres = genresArray[0].name;
        for (let i = 1; i < genresArray.length; ++i) {
            genres += " / " + genresArray[i].name;
        }
        return (genres);
    }
    static _getCompanies(companiesArray) {
        let companies = "";

        if (companiesArray.length === 0)
            return ("inconnu");
        companies = companiesArray[0].name;
        for (var i = 1; i < companiesArray.length; ++i) {
            companies += " / " + companiesArray[i].name;
        }
        return (companies);
    }
    _toggleFavorite() {
        const action = {
            type: "TOGGLE_FAVORITE",
            value: this.state.film
        }
        this.props.dispatch(action)
    }
    _displayFavoriteImage() {
        let sourceImage = require("../../assets/Images/ic_favorite_border.png")

        if (this.props.favoritesFilm.findIndex(
            item => item.id === this.state.film.id) !== -1) {
            sourceImage = require("../../assets/Images/ic_favorite.png")
        }
        return (
            <Image
                style={styles.favoriteImage}
                source={sourceImage}
            />
        )
    }
    _displayFilm() {
        const film = this.state.film;
        if (film === undefined)
            return;
        return (
            <ScrollView style={styles.scrollViewContainer}>
                <Image
                    style={styles.image}
                    source={
                        {uri: getImageFromApi(film.backdrop_path)}}/>
                <Text style={styles.title}>{film.title}</Text>
                <TouchableOpacity
                    style={styles.favoriteContainer}
                    onPress={() => this._toggleFavorite()}>
                    {this._displayFavoriteImage()}
                </TouchableOpacity>
                <Text style={styles.description}>
                    {film.overview}
                </Text>
                <Text style={styles.technicalSheet}>
                    {"Sorti le "
                    + FilmDetail._formatReleaseDate(film.release_date)}
                </Text>
                <Text style={styles.technicalSheet}>
                    {"Note : " + film.vote_average + " / 10"}
                </Text>
                <Text style={styles.technicalSheet}>
                    {"Nombre de votes : " + film.vote_count}
                </Text>
                <Text style={styles.technicalSheet}>
                    {"Budget : " + FilmDetail._formatBudget(film.budget)}
                </Text>
                <Text style={styles.technicalSheet}>
                    {"Genre(s) : " + FilmDetail._getGenres(film.genres)}
                </Text>
                <Text style={styles.technicalSheet}>
                    {"Companie(s) : "
                    + FilmDetail._getCompanies(film.production_companies)}
                </Text>
            </ScrollView>
        )
    }
    _shareFilm() {
        const film = this.state.film
        Share.share({title: film.title, message: film.overview})
            .then(
                Alert.alert(
                    "Succès",
                    "Film partagé",
                    [
                        {text: "OK", onPress: () => {}},
                    ]
                )
            )
            .catch(err =>
                Alert.alert(
                    "Echec",
                    "Film non partagé",
                    [
                        {text: "OK", onPress: () => {}},
                    ]
                )
            )
    }
    _displayFloatingActionButton() {
        const film = this.state.film
        if (film != undefined && Platform.OS === "android") {
            return (
                <TouchableOpacity
                    style={styles.shareTouchableFloatingActionButton}
                    onPress={() => this._shareFilm()}>
                    <Image
                        style={styles.shareImage}
                        source={require("../../assets/Images/ic_share.png")} />
                </TouchableOpacity>
            )
        }
    }

    render () {
        return (
            <View style={styles.mainContainer}>
                {this._displayLoading()}
                {this._displayFilm()}
                {this._displayFloatingActionButton()}
            </View>
        )
    }
    componentDidMount() {
        const favoriteFilmIndex =
            this.props.favoritesFilm.findIndex(
                item => item.id === this.props.navigation.state.params.idFilm)
        if (favoriteFilmIndex !== -1) {
            this.setState({
                film: this.props.favoritesFilm[favoriteFilmIndex]
            })
            return
        }
        this.setState({isLoading: true})
        getFilmDetailFromApi(this.props.navigation.state.params.idFilm)
            .then(data => {
                this.setState({
                    film: data,
                    isLoading: false
                })
            })
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    loadingContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollViewContainer: {
        flex: 1
    },
    image: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        height: 180
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
        textAlign: "center"
    },
    description: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        fontStyle: "italic",
        color: "#666666"
    },
    technicalSheet: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        fontWeight: "bold"
    },
    favoriteContainer: {
        alignItems: "center"
    },
    favoriteImage: {
        width: 40,
        height: 40
    },
    shareTouchableFloatingActionButton: {
        position: "absolute",
        width: 60,
        height: 60,
        right: 30,
        bottom: 30,
        borderRadius: 30,
        backgroundColor: "#e91e63",
        justifyContent: "center",
        alignItems: "center"
    },
    shareImage: {
        width : 30,
        height: 30
    }
})

const mapStateToProps = (state) => {
    return (state)
}

export default connect(mapStateToProps)(FilmDetail)
