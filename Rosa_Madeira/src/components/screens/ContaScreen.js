import React, { Component } from 'react';
import { Text, View, AsyncStorage, ScrollView, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ButtonHome, Card, CardSection } from '../common';
import axios from 'axios';

class ContaScreen extends Component {
  state = {nome: '', credito: '', data_expira: '', isRefreshing: false};

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
        <ScrollView style={{marginTop: 55, flex: 1, backgroundColor:'#ede6de'}}>
          <View style={{flex: 1}}>
            <View style={{flex: 1, marginTop: 50}}>
              <Card>
                <View style={Styles.containerInfoStyle}>
                  <Text style={{color:'black', fontSize: 15, textAlign:'center'}}>Revendedor: Victor Ditadi</Text>
                </View>
              </Card>
              <Card>
                <View style={Styles.containerInfoStyle}>
                  <Text style={{color:'black', fontSize: 15, textAlign:'center'}}>ID Revendedor: XKPTO</Text>
                </View>
              </Card>
              <Card>
                <View style={Styles.containerInfoStyle}>
                  <Text style={{color:'black', fontSize: 15, textAlign:'center'}}>Data Expiração Assinatura: 2017-18-11</Text>
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

        <View style={{flex: 0.3, flexDirection: 'row', backgroundColor:'#ede6de'}}>
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

export default ContaScreen ;
