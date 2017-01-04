import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView,
  Image,
  StatusBar
} from 'react-native';

import {Container, Content, Header, Title, Footer, FooterTab, Button, Icon} from 'native-base';

export default class Faixa extends Component{
  constructor(){
    super();
  }
  render(){
    return(
        <Header>
          <Title>IQMail</Title>
        </Header>
    )
  }
}
