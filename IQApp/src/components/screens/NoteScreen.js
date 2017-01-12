import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NotificacoesLista, NotificacoesDetalhes} from '../notificacoes';
import { ButtonHome } from '../common';

class NoteScreen extends Component {

  deslogarCliente() {
    AsyncStorage.setItem("isLogin", false.toString());
    AsyncStorage.setItem("cliente_hash", '');
    AsyncStorage.setItem("cliente_id", '');
    Actions.telaInicial();
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{marginTop: 55, flex: 1}}>
          <NotificacoesLista />
        </View>
      </View>
    );
  }
};

export { NoteScreen };
