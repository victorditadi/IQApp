import React, { Component } from 'react';
import { View, ScrollView, AsyncStorage, RefreshControl, Text } from 'react-native';
import axios from 'axios';
import { NotificacoesDetalhes } from './index';
import { ButtonHome } from '../common';
import { Icon, Button } from 'native-base';


class NotificacoesLista extends Component {
  state = { notificacoesLista: [], isRefreshing: false};

  componentWillMount()
  {
    // console.log("Inicio Will Mount");
      this.carregarInfoCliente().done();
      // console.log("Fim Will Mount");
  }

  async carregarInfoCliente()
  {
    try {
      await AsyncStorage.multiGet(['cliente_id','cliente_hash'], (err, stores) => {
        stores.map( (result, i, store) => {
          this.setState({ cliente_id: store[0][1], cliente_hash: store[1][1] });
          this.carregarNotificacoes();
        });
      });
    } catch(error){
      console.log(error);
    }
  }

  carregarNotificacoes(){
    if(this.state.cliente_id && this.state.cliente_hash)
    {
      axios.get('http://52.7.254.69/cliente/appMobile/notificacao.php?opcao=listar',{
        params: {
          hash: this.state.cliente_hash,
          cliente_id: this.state.cliente_id
        }
      })
        .then(response => this.setState({notificacoesLista: response.data}));
    }
  }


  renderNotificacao() {
    return this.state.notificacoesLista.map(notificacao =>
      <NotificacoesDetalhes key={notificacao.idNotificacao} notificacao={notificacao}  />
    );
  }


  _onRefresh(){
    setTimeout(() => {
        this.carregarNotificacoes();
      }, 1000);
  }


  render(){
    return (
      <ScrollView style={{flex:1, backgroundColor: '#e6e6e6'}}
        refreshControl={
          <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh.bind(this)}
                tintColor="#715696"
                />
            }>
        {this.renderNotificacao()}
      </ScrollView>
    );
  }
}

export { NotificacoesLista };
