/*
 * Filename : components/film_item.js
 */

import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

class FilmItem extends React.Component {
    render() {
        const film = this.props.film;
        return (
            <View style={styles.mainContainer}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, backgroundColor: "grey" }}>
                        <Image
                            style={styles.image}
                            source={{url: "image"}}/>
                    </View>
                    <View style={{ flex: 4 }}>
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
            </View>
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