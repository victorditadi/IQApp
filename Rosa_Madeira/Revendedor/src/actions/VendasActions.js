import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import { FETCH_VENDAS_SUCESS, FETCH_PRODUTOS_SUCESS } from './types';



export const fetch_list_produtos = (id_venda) => {
  return(dispatch) => {
    axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/venda.php',{
      params: {
        opcao: 'listar_produto',
        id_venda: id_venda
      }
    })
      .then(response => dispatch({type: FETCH_PRODUTOS_SUCESS, payload: response}));
  }
}
export const fetch_vendas = () => {
  return(dispatch) => {
    AsyncStorage.getItem('cliente_id', (err, response) => {
      fetch_vendas_form(dispatch, response);
    })
  }
};
const fetch_vendas_form = (dispatch, cliente_id) => {

  if(cliente_id != '') {
    axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/venda.php',{
      params: {
        opcao: 'listar',
        id_revendendor: cliente_id
      }
    })
      .then(response => dispatch({type: FETCH_VENDAS_SUCESS, payload: response}));
  }
};
