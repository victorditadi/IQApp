import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Router from './Router';

class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <View style={{flex: 1}}>
      <Router />
      </View>

    );
  }
}

export default App;
