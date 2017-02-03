import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import _ from 'lodash';

import { ADD_TO_CART, REMOVE_TO_CART, CHECK_TO_CART, FETCH_CARRINHO_SUCESS, REMOVE_TO_CART_PRODUTO, FETCH_CARRINHO_FAILED } from './types';


export const add_to_cart = (id) => {
  return(dispatch) => {
    dispatch({type: ADD_TO_CART, payload: id})
  }
};

export const remove_to_cart = (id) => {
  return(dispatch) => {
    dispatch({type: REMOVE_TO_CART, payload: id});
    dispatch({type: REMOVE_TO_CART_PRODUTO, payload: id})

  }
};

export const remove_to_cart_produto = (id) => {
  return(dispatch) => {
    dispatch({type: REMOVE_TO_CART_PRODUTO, payload: id})
    dispatch({type: REMOVE_TO_CART, payload: id});

  }
};

export const fetch_carrinho = (listCarrinho) => {
  if(listCarrinho == null){
    return(dispatch) => dispatch({type: FETCH_CARRINHO_FAILED})
  }
  return (dispatch) => {
      axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/catalogo.php', {
          params: {
              opcao: 'listar_carrinho',
              produto: listCarrinho.carrinho
          }
      }).then(response => dispatch({type: FETCH_CARRINHO_SUCESS, payload: response.data}));
  }
};

// dispatch({type: FETCH_CARRINHO_SUCESS, payload: response.data})
