/*
 * Filename : components/search.js
 */

import React from 'react'
import {FlatList, StyleSheet, View, TextInput, Button, Text} from 'react-native'
import films from '../helpers/films_data.js'
import FilmItem from "./film_item";

class Search extends React.Component {
    render() {
        return (
            <View style={ styles.mainContainer }>
                <TextInput
                    style={[styles.textInput, { marginBottom: 10 }]}
                    placeholder={'Titre du film'}/>
                <Button
                    style={{ height: 50 }}
                    title={'Rechercher'} onPress={() => {}}/>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 0,
        marginTop: 20
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search