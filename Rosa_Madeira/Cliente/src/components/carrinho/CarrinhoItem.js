import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, InputGroup, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { remove_to_cart, remove_to_cart_produto } from '../../actions';
import { Actions } from 'react-native-router-flux';
class CarrinhoItem extends Component {

  removeToCart(id){
    this.props.remove_to_cart_produto(id);
    Actions.refresh();
  }

  render(){
    const { nome, valor, categoria, id } = this.props.carrinhoLista;
    if(nome == null) return false;
    if(nome !== ''){
    return(
      <List>
       <ListItem>
           <Thumbnail square size={80} source={{uri: 'https://cdn.awsli.com.br/600x450/244/244982/produto/15171830/5351a9073b.jpg' }} />
           <Text>{nome}</Text>
           <Text note>Descrição: Bijuteria incrivelmente feita pela artesã Jubilei da Jubileia</Text>
           <Text note>Valor: {valor}</Text>
      </ListItem>
      <ListItem>
             <InputGroup>
               <Input inlineLabel label="Quantidade" placeholder="1" keyboardType="numeric"/>
            </InputGroup>
      </ListItem>
      <ListItem>
          <Button block danger onPress={() => this.removeToCart(id) }> Remover </Button>
      </ListItem>
      </List>
    );
  }
}
}

const mapStateToProps = state => {
  // console.log(state);
  return{};
}

export default connect(mapStateToProps, {remove_to_cart, remove_to_cart_produto})(CarrinhoItem);
