import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import VendasLista from '../vendas/VendasLista';


class NoteScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#ede6de'}}>
        <View style={{marginTop: 20, marginBottom: 60, flex: 1}}>
          <VendasLista />
        </View>
      </View>
    );
  }
}

export default NoteScreen;
