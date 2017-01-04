import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  AlertIOS,
  StyleSheet
} from 'react-native';

import STYLES from '../components/Counter.styles.js';

export default class CounterComponent extends Component{
  constructor(){
    super();

    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render(){
    return(
      <View>
        <Text style = {STYLES.textCounter}>
          {this.state.counter}
        </Text>
        <Button color='#F44336' title = 'Inc'  onPress={this.increment}></Button>
        <Button title = 'Desc' onPress={this.decrement}></Button>
      </View>
    );
  }
}
