/*
 * Filename : components/film_item.js
 */

import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

class FilmItem extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ flex: 1, backgroundColor: "grey" }}>
                </View>
                <View style={{ flex: 4, backgroundColor: "red"}}>
                    <Text style={styles.titleText}>Titre du film</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        //height: 190
        flex: 1,
        flexDirection: "row",
        backgroundColor: "black"
    },
    titleText: {

    }
})

export default FilmItem