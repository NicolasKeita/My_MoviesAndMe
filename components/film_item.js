/*
 * Filename : components/film_item.js
 */

import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

class FilmItem extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flexDirection: "row"}}>
                    <View style={{ flex: 1, backgroundColor: "grey" }}>
                    </View>
                    <View style={{ flex: 4}}>
                        <View style={{ flexDirection: "row"}}>
                            <Text style={styles.titleText, {flex: 3}}>Titre du film</Text>
                            <Text style={{flex: 1}}>Vote</Text>
                        </View>
                        <Text>Description</Text>
                        <Text>Sorti le</Text>
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

    }
})

export default FilmItem