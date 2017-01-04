import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-material-design';
import HeaderIQMail from './Faixa';


export default class Login extends Component {
  constructor() {
    super();
  }
    render() {
      return ( 
        <View>
          <HeaderIQMail />
        </View>
      )
    }
}
