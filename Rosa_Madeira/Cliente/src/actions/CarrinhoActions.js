import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import _ from 'lodash';

import { ADD_TO_CART, REMOVE_TO_CART, CHECK_TO_CART } from './types';

//
export const check_cart = (props) => {
  return(dispatch) => {

    // var a = props.carrinhoLista.indexOf(props.catalogoLista.id);
    // // console.log(props.carrinhoLista);
    // // console.log("ID PRODUTO -> "+props.catalogoLista.id);
    // // console.log("Resultado Comparação "+a);
    // if(a >= 0 ) dispatch({type: CHECK_TO_CART, payload: true})
  }
};

export const add_to_cart = (props) => {
  return (dispatch) => {
    dispatch({type: ADD_TO_CART, payload: props.catalogoLista.id});
    // dispatch({type: CHECK_TO_CART});
    AsyncStorage.setItem("carrinho_"+props.catalogoLista.id, true.toString());

  }
};

export const remove_to_cart = (props) => {
  return (dispatch) => {
    AsyncStorage.setItem("carrinho_"+id, false.toString());
  }
};

export const fetch_product_carrinho = (id) => {
  // console.log(id);
  return (dispatch) => {
    AsyncStorage.getItem("carrinho_"+id).then((response) => {
      if(response == 'true') dispatch({type: CHECK_TO_CART, payload: true});
      if(response != 'true') dispatch({type: CHECK_TO_CART, payload: false});
    });
  }
}

// export const fetch_carrinho = () => {
//   return (dispatch) => {
//
//   }
// }
