import React, {Component} from 'react';
import { Text } from 'react-native';
import STYLES from '../components/Counter.styles.js';


export default class TextComponent extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Text>
        {this.props.meuTexto}
      </Text>
    )
  }
}
