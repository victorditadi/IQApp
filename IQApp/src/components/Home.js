import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NotificacoesLista from './NotificacoesLista';
import NotificacoesDetalhes from './NotificacoesDetalhes';
import { ButtonHome } from './common';

class Home extends Component {

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

        <View style={{flex: 0.1, flexDirection: 'row'}}>
          <ButtonHome color='#3D3C3C' onPress={() => this.deslogarCliente()}>
            Sair
          </ButtonHome>
        </View>

      </View>
    );
  }
};

export default Home;
