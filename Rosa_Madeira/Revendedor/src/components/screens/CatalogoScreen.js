import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CatalogoScreen extends Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#ede6de', justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize: 30, color: '#846848', opacity: 0.8}}>
              Catalogo Indisponivel
            </Text>
      </View>
    );
  }
};

export default CatalogoScreen;
