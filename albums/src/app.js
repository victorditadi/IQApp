import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import AlbumList from './components/AlbumList'

class App extends Component {
  render() {
    return(
      <View>
        <Header headerText={"Albuns"} />
        <AlbumList />
      </View>
    );
  }
}

export default App;
