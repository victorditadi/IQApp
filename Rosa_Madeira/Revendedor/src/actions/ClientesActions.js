import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import { FETCH_CLIENTES_SUCESS, FETCH_CLIENTE_VENDAS_SUCESS  } from './types';

export const fetch_clientes = () => {
  return(dispatch) => {
    AsyncStorage.getItem('cliente_id', (err, response) => {
      fetch_clientes_sucess(dispatch, response);
    })
  }
};

const fetch_clientes_sucess = (dispatch, cliente_id) => {
  if(cliente_id != '') {
    axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/cliente.php', {
      params: {
        opcao: 'listar',
        id_revendendor: cliente_id
      }
    })
    .then(response => dispatch({type: FETCH_CLIENTES_SUCESS, payload: response}));
  }
};

export const fetch_cliente_venda = (codigo_cliente) => {
  return(dispatch) => {
      axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/venda.php', {
        params: {
          opcao: 'listar_vendar_cliente',
          codigo_cliente: codigo_cliente
        }
      })
      .then(response => dispatch({type: FETCH_CLIENTE_VENDAS_SUCESS, payload: response}));
    }

}
