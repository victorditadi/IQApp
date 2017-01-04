import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';
import HeaderIQMail from './Faixa';


export default class AboutPage extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <View>
        <HeaderIQMail></HeaderIQMail>
        <Text>About</Text>
        <Button onPress={this.goToHomePage} title="Go to Home Page">Home</Button>
        <Text>{this.props.data}</Text>
      </View>
    )
  }


goToHomePage = () => {
  this.props.navigator.push({
    name: 'Home',
    title: 'Home'

  })
}
}
