import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import ClienteLista from '../clientes/ClientesLista';
import { Button } from '../common/card_produto';


class ClienteScreen extends Component {

  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#ede6de'}}>
        <View style={{marginTop: 20, marginBottom: 60, flex: 0.8}}>
          <ClienteLista />
        </View>
      </View>
    );
  }
}

export default ClienteScreen;
