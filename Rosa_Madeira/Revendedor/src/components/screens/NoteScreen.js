import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import  NotificacoesLista  from '../notificacoes/NotificacoesLista';


class NoteScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#ede6de'}}>
        <View style={{marginTop: 55, flex: 1}}>
          <NotificacoesLista />
        </View>
      </View>
    );
  }
}

export default NoteScreen;
