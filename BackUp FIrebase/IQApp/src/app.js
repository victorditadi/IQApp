import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { ButtonForm, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import SplashScreen from './components/SplashScreen';
import HomeInit from './components/HomeInit';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBdWNpwAGobgV2qaXgDyrhwUdj27iu_pI',
      authDomain: 'iqapp-c6a89.firebaseapp.com',
      databaseURL: 'https://iqapp-c6a89.firebaseio.com',
      storageBucket: 'iqapp-c6a89.appspot.com',
      messagingSenderId: '903666010320'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {

      case true:
      return (
      <CardSection>
        <ButtonForm onPress={() => firebase.auth().signOut()}>
          Deslogar
        </ButtonForm>
        </CardSection>
      );
      break;

      case false:
      return <HomeInit/>;
      break;

      default:
      return <Text>Carregando</Text>
    }
  }


  render() {
    return (
      <View style={{flex: 1}}>
      <SplashScreen>
        <View style={{flex: 1}}>
            {this.renderContent()}
        </View>
      </SplashScreen>
      </View>
    );
  }
}


export default App;
