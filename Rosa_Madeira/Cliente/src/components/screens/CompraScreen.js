import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import CompraLista from '../compra/CompraLista';


class CompraScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#f6f2ef'}}>
        <View style={{marginTop: 20, marginBottom: 60, flex: 1}}>
          <CompraLista />
        </View>
      </View>
    );
  }
}

export default CompraScreen;
