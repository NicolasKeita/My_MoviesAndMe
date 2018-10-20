/*
 * Filename : App.js
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/search'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Salut ca va.</Text>
        <Text>Bienvenue dans ma super appli ...</Text>
        <Text>Ceci est un test ..!.</Text>
        <Search/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
