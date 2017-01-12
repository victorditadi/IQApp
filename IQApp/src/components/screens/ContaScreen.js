import React, { Component } from 'react';
import { Text, View, AsyncStorage, ScrollView, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ButtonHome, Card, CardSection } from '../common';
import axios from 'axios';

class ContaScreen extends Component {
  state = {nome: '', credito: '', data_expira: '', isRefreshing: false};

  componentWillMount(){
    this.carregarInfoCliente().done();
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
      axios.get('http://52.7.254.69/cliente/appMobile/info.php',{
        params: {
          password: this.state.cliente_hash,
          id: this.state.cliente_id
        }
      })
        .then(response => {

          this.setState({
            nome: response.data.nome,
            credito: response.data.credito,
            data_expira: response.data.data_expira }
          );
      }
    )
  }
}

_onRefresh(){
  setTimeout(() => {
      this.carregarNotificacoes();
    }, 1000);
}


  deslogarCliente() {
    AsyncStorage.setItem("isLogin", false.toString());
    AsyncStorage.setItem("cliente_hash", '');
    AsyncStorage.setItem("cliente_id", '');
    AsyncStorage.setItem("cliente_nome", '');
    Actions.init();
  }


  render(){
    return(
      <View style={{flex: 1}}>
        <ScrollView style={{marginTop: 55, flex: 1, backgroundColor:'#e6e6e6'}}
          refreshControl={
            <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this._onRefresh.bind(this)}
                  tintColor="#715696"
                  />
          }>
          <View style={{flex: 1}}>
            <View style={{flex: 1, marginTop: 50}}>
              <Card>
                <View style={Styles.containerInfoStyle}>
                  <Text style={{color:'black', fontSize: 15, textAlign:'center'}}>Usuário: {this.state.nome}</Text>
                </View>
              </Card>
              <Card>
                <View style={Styles.containerInfoStyle}>
                  <Text style={{color:'black', fontSize: 15, textAlign:'center'}}>Creditos: {this.state.credito}</Text>
                </View>
              </Card>
              <Card>
                <View style={Styles.containerInfoStyle}>
                  <Text style={{color:'black', fontSize: 15, textAlign:'center'}}>Data Expiração: {this.state.data_expira}</Text>
                </View>

              </Card>
            </View>
            {/* <View style={{flex: 0.4}}>
              <Card>
                <View style={Styles.containerBuyStyle}>
                  <Text style={{color:'#4d4d4d', fontSize: 15, textAlign:'center'}}>COMPRAR CREDITOS</Text>
                </View>
              </Card>
            </View> */}
          </View>
        </ScrollView>

        <View style={{flex: 0.3, flexDirection: 'row', backgroundColor:'#e6e6e6'}}>
          <ButtonHome color='#f2f2f2' onPress={() => this.deslogarCliente()}>
            <Text style={{fontSize: 15, textAlign:'center'}}>Sair</Text>
          </ButtonHome>
        </View>

      </View>
    );
  }
};

const Styles ={
  containerInfoStyle: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#cccccc',
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  containerBuyStyle: {
    padding: 20,
    backgroundColor: '#fbc02d',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#cccccc',
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
}

export { ContaScreen };
