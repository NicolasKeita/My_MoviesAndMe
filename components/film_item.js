/*
 * Filename : components/film_item.js
 */

import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

class FilmItem extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <View style={{ flex: 1, backgroundColor: "grey" }}>

                    </View>
                    <View style={{ flex: 4 }}>
                        <View style={{ flex: 1, flexDirection: "row"}}>
                            <View style={{ flex: 4}}>
                                <Text style={styles.titleText}>
                                    Titre du film
                                </Text>
                            </View>
                            <View style={{ flex: 1}}>
                                <Text style={styles.voteText}>
                                    Vote
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 4}}>
                            <Text style={styles.descriptionText}
                                  numberOfLines={6}>
                                Description
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.releaseDate}>
                                Sorti le 0/0/0000
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
        textAlign: "right"
    }
})

export default FilmItem