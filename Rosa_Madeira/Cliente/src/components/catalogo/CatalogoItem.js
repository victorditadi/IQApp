import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { check_cart, add_to_cart, remove_to_cart, fetch_product_carrinho, fetch_produto_single, change_button_product } from '../../actions';
import { Actions } from 'react-native-router-flux';
var Immutable = require('immutable');

class CatalogoItem extends Component {

  buttonCart(id){
    const { carrinhoLista } = this.props;

    if(carrinhoLista.indexOf(parseInt(id, 10)) == -1){
      return(<Button success onPress={() => this.props.add_to_cart(id) }>
        Adicionar ao Carrinho
      </Button>);
    }
      else {
      return (
        <Button danger onPress={() => this.props.remove_to_cart(id) }>
          Remover do Carrinho
        </Button>
      );
    }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.status == true) return true;
  //   return false;
  // }

  render(){
    const { nome, valor, categoria, id } = this.props.catalogoLista;

    return(
      <Card style={{ flex: 0 }}>

          <CardItem>
                {/* <Icon name='ios-log-in-outline' style={{fontSize: 20, color:'black'}}/> */}
              <Text>{nome}</Text>
              <Text note>Categoria: {categoria}</Text>
          </CardItem>

          <CardItem>
            <Image style={{ resizeMode: 'cover', width: null }} source={{uri: 'https://cdn.awsli.com.br/600x450/244/244982/produto/15171830/5351a9073b.jpg' }}/>
          </CardItem>

          <CardItem style={{flexDirection: 'row'}}>
            <Button transparent onPress={() => this.cart(id)}>
                R$ {valor}
              </Button>
              {this.buttonCart(id)}
          </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  const { carrinhoLista } = state.carrinho;
  const { status }  = state.catalogo;
  return { carrinhoLista, status };
}

export default connect(mapStateToProps, {check_cart, add_to_cart, remove_to_cart, fetch_product_carrinho, fetch_produto_single, change_button_product})(CatalogoItem);
