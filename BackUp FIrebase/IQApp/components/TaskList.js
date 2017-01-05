import React, { Component } from 'react';
import { View, TextInput, Text, Button, AlertIOS } from 'react-native';
import HeaderIQMail from './Faixa';
import { Container, Content, InputGroup, Input } from 'native-base';

export default class TaskList extends Component{
  constructor(){
    super();


    this.state = {
      todoTxt: '',
      todos: []
    }
  }
  render(){
    return(
      <View>
        <HeaderIQMail></HeaderIQMail>

        <View>
           <InputGroup borderType='regular' >
          <Input onChangeText={ this.handleChange } value={ this.state.todoTxt } placeholder='Digite sua Lista'/>
          </InputGroup>
          <Button
            title='New Todo'
            onPress={this.save}>

            </Button>
        </View>


        <View>
          { this.state.todos.map((item, key) => (
            <Text key = {key}>{item}</Text>
          ))}

        </View>
      </View>
    );
  }

  handleChange = (txt) => {
    this.setState({
      todoTxt:txt
    })
  }

  save = () => {
    if(!this.state.todoTxt) {
      AlertIOS.alert('Por favor, preencha o campo.');
    }

    this.state.todos.push(this.state.todoTxt);

    this.setState({
      todoTxt: '',
      todos  : this.state.todos
    });
  }
}
