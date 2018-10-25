/*
 * Filename : components/search.js
 */

import React from 'react'
import {
    FlatList,
    StyleSheet,
    View,
    TextInput,
    Button,
    ActivityIndicator
} from 'react-native'
import FilmItem from "./film_item"
import { getFilmsFromApiWithSearchedText } from "../api/tmdb_api";

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            isLoading: false
        }
        this.searchedText = "";
        this.page = 0;
        this.totalPages = 0;
    }
    _searchFilms() {
        this.page = 0;
        this.totalPages = 0
        this.setState({
            films: []
        }, () => {
            this._loadFilms()
        })
    }
    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id : " + idFilm);
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm});
    }
    _searchTextInputChanged(text) {
        this.searchedText = text;
    }
    _loadFilms() {
        if (this.searchedText.length > 0) {
            this.setState({isLoading: true})
            getFilmsFromApiWithSearchedText(
                this.searchedText,
                this.page + 1
            ).then(data => {
                this.page = data.page;
                this.totalPages = data.total_pages;
                this.setState({
                    films: this.state.films.concat(data.results),
                    isLoading: false
                })
            });
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
    render() {
        return (
            <View style={ styles.mainContainer }>
                <TextInput
                    style={[styles.textInput, { marginBottom: 10 }]}
                    placeholder={'Titre du film'}
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />
                <Button
                    style={{height: 50}}
                    title={'Rechercher'} onPress={() => this._searchFilms()}
                />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <FilmItem
                            film={item}
                            displayDetailForFilm={this._displayDetailForFilm}
                        />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (
                            this.state.films.length > 0
                            && this.page < this.totalPages
                        ) {
                            this._loadFilms()
                        }
                    }}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 0,
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    loadingContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 100,
        bottom : 0,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Search