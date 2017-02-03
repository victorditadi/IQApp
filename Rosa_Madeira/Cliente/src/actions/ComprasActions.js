import axios from 'axios';
import  { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import { FETCH_COMPRAS_SUCESS, FETCH_LISTA_PRODUTOS } from './types';

export const fetch_lista_produtos = (id) => {
  return(dispatch) => {
    axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/venda.php', {
      params: {
        opcao: 'listar_produto',
        id_venda: id
        }
      })
        .then(response => dispatch({type: FETCH_LISTA_PRODUTOS, payload: response.data}));
      }
  };

// dispatch({type: FETCH_LISTA_PRODUTOS, payload: response})

export const fetch_compras = () => {

  return(dispatch) => {
    AsyncStorage.getItem('cliente_codigo', (err, response) => {
      // console.log(response);
      fetch_compras_form(dispatch, response);
    })
  }
};
const fetch_compras_form = (dispatch, cliente_id) => {
    if(cliente_id != '') {
      axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/cliente.php',{
        params: {
          opcao: 'listar_compras',
          id_cliente: cliente_id
        }
      })
        .then(response => dispatch({type: FETCH_COMPRAS_SUCESS, payload: response.data}));
    }
  };
