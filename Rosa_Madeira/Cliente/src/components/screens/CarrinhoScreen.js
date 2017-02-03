import React, { Component } from 'react';
import { View, Text, ListView, ScrollView } from 'react-native';
import CarrinhoLista from '../carrinho/CarrinhoLista';
import { Button } from 'native-base';
class CarrinhoScreen extends Component {

  renderButton(){
    if(this.props.listCarrinho == '') return false;
    return(
    <View style={{flex: 0.1, marginBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
      <Button block success>
        Seguir com a Compra
      </Button>
    </View>
    );
  }
  render(){
    // console.log('Screen');
    // console.log(this.props);
    return(
      <View style={{flex: 1, backgroundColor: '#f6f2ef'}}>
        <View style={{flex: 0.7}}>
            <CarrinhoLista carrinho={this.props.listCarrinho}/>
        </View>
        {this.renderButton()}
      </View>
    );
  }

};

export default CarrinhoScreen;
