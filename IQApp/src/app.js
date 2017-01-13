import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Router from './Router';
import * as firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyD0157wHVy2Kyw4TbhSJ46pMN0DNmE3ce8",
       authDomain: "iq-mail.firebaseapp.com",
       databaseURL: "https://iq-mail.firebaseio.com",
       storageBucket: "iq-mail.appspot.com",
       messagingSenderId: "6604847006"
    };
    firebase.initializeApp(config);
  }


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
