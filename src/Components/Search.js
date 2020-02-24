/*
 * Filename : src/Components/Search.js
 */

import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    ActivityIndicator
} from 'react-native'
import FilmList from "./FilmList"
import { getFilmsFromApiWithSearchedText } from "../API/tmdb_api"

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
        this._loadFilms = this._loadFilms.bind(this)
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
                    films: [...this.state.films, ...data.results],
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
            <View style={styles.mainContainer}>
                <TextInput
                    style={[styles.textInput, { marginBottom: 10 }]}
                    placeholder="Titre du film"
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />
                <Button
                    style={{height: 50}}
                    title="Rechercher" onPress={() => this._searchFilms()}
                />
                <FilmList
                    films={this.state.films}
                    navigation={this.props.navigation}
                    loadFilms={this._loadFilms}
                    page={this.page}
                    totalPages={this.totalPages}
                    FavoriteList={false}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
