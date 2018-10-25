/*
 * Filename : components/film_item.js
 */

import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import {getImageFromApi} from "../api/tmdb_api";

class FilmItem extends React.Component {
    render() {
        const film = this.props.film;
        const displayDetailForFilm = this.props.displayDetailForFilm;
        //const {film, displayDetailForFilm } = this.props
        return (
            <TouchableOpacity
                style={styles.mainContainer}
                onPress={() => displayDetailForFilm(film.id)}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View>
                        <Image
                            style={styles.image}
                            source={{uri: getImageFromApi(film.poster_path)}}/>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: "row"}}>
                            <View style={{ flex: 4}}>
                                <Text style={styles.titleText}
                                      numberOfLines={2}>
                                    {film.title}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.voteText}>
                                    {film.vote_average}
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={styles.descriptionText}
                                  numberOfLines={6}>
                                {film.overview}
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.releaseDate}>
                                Sorti le {film.release_date}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 190,
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 20,
        flexWrap: "wrap"
    },
    voteText: {
        fontWeight: "bold",
        fontSize: 26,
        color: "#666666"
    },
    descriptionText: {
        justifyContent: "center",
        fontStyle: "italic",
    },
    releaseDate: {
        marginTop: 10,
        textAlign: "right",
        fontSize: 14
    }
})

export default FilmItem