import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, CardSection } from './common';

class HomeLogin extends Component {
  render () {
    return (
      <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
          Deslogar
        </Button>
        </CardSection>
    );
  }
}

export default HomeLogin;
