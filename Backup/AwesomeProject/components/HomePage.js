import React, { Component } from 'react';
import { Text, Button,View} from 'react-native';
import HeaderIQMail from './Faixa';


export default class HomePage extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <View>
        <HeaderIQMail></HeaderIQMail>

        <Text>Home</Text>
        <Button onPress={this.goToAboutPage} title="Go to About Page">About</Button>
        <Button onPress={this.goToMyTaskList} title="Go to Task Page">Task List</Button>

      </View>
    )
  }

  goToAboutPage = () => {
    this.props.navigator.push({
      name: 'About',
      title: 'About',
      passProps: {
        data: "This is my Data"
      }
    })
  }

  goToMyTaskList = () =>{
    this.props.navigator.push({
      name: 'Task',
      title: 'TaskList',
      passProps: {}
    })
  }
}
