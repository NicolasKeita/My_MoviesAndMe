import React from "react"
import {StyleSheet, Text, View} from "react-native"
import {connect} from "react-redux"
import FilmList from "./FilmList.js"

class Favorites extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <FilmList
                    films={this.props.favoritesFilm}
                    navigation={this.props.navigation}
                    FavoriteList={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorites)