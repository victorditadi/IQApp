import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon } from 'native-base';
import CatalogoLista from '../catalogo/CatalogoLista';
import { Actions } from 'react-native-router-flux';

class CatalogoScreen extends Component{

  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#f6f2ef', }}>
        <CatalogoLista />
       </View>
    );
  }
};

export default CatalogoScreen;
