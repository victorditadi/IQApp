import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import SplashScreen from './components/SplashScreen';

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
    if (this.state.loggedIn) {
      return (
      <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
          Deslogar
        </Button>
        </CardSection>
      );
    }
    return (
        <LoginForm />
      );
  }


  render() {
    return (
      <View>
      <SplashScreen>
        <View>
          <Header headerText="IQMail" />
            {this.renderContent()}
        </View>
      </SplashScreen>
      </View>
    );
  }
}


export default App;
