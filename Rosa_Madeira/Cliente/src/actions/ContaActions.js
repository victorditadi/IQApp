import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import {
CLIENTE_NAME,
CLIENTE_INFO,
EMAIL_CHANGED_CLIENTE,
ENDERECO_CHANGED,
CEP_CHANGED,
NOME_CHANGED,
TELEFONE_CHANGED,
LIMPAR_ATUALIZAR,
ATUALIZAR_INFO_START,
ATUALIZAR_INFO_SUCESS } from './types';

export const clienteName = () => {
  return (dispatch) => {
    AsyncStorage.getItem("cliente_nome").then((response) => {
      dispatch({type: CLIENTE_NAME, payload: response});
    });
  }
};

export const clienteInfo = () => {
  return(dispatch) => {
    AsyncStorage.getItem("cliente_id").then((response) => {
      axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/cliente.php', {
        params: {
          opcao: 'listar',
          id_cliente: response
          }
        })
          .then(user => dispatch({type: CLIENTE_INFO, payload: user.data}));
        });
  }
}

// dispatch({type: CLIENTE_INFO, payload: user})

export const atualizarInfo = (nome, cep, email, endereco, telefone, id_cliente) => {
  return (dispatch) => {
    dispatch({type: ATUALIZAR_INFO_START, payload: ''});
    axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/cliente.php', {
      params: {
        opcao: 'atualizar_cliente',
        nome: nome,
        cep: cep,
        email: email,
        endereco: endereco,
        telefone: telefone,
        id_cliente: id_cliente
        }
      })
        .then(user => dispatch({type: ATUALIZAR_INFO_SUCESS, payload:''}));
  };
}

export const nomeChanged = (text) => {
  return {
    type: NOME_CHANGED,
    payload: text
  };
};
export const telefoneChanged = (text) => {
  return {
    type: TELEFONE_CHANGED,
    payload: text
  };
};
export const cepChanged = (text) => {
  return {
    type: CEP_CHANGED,
    payload: text
  };
};
export const enderecoChanged = (text) => {
  return {
    type: ENDERECO_CHANGED,
    payload: text
  };
};
export const emailChangedCliente = (text) => {
  return {
    type: EMAIL_CHANGED_CLIENTE,
    payload: text
  };
};

export const cancelarButton = () =>{
  return {
    type: LIMPAR_ATUALIZAR,
    payload: ''
  }
}
