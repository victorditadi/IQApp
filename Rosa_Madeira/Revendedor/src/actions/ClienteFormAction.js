import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import {
  CLIENTE_FORM_SUCESS,
  EMAIL_CHANGED_CLIENTE,
  DATA_NASCIMENTO_CHANGED,
  ENDERECO_CHANGED,
  CEP_CHANGED,
  NOME_CHANGED,
  TELEFONE_CHANGED,
  CLIENTE_FORM_ERROR_ID,
  CLIENTE_FORM_ERROR_EMAIL} from './types';


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
export const dataNascimentoChanged = (text) => {
  return {
    type: DATA_NASCIMENTO_CHANGED,
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

export const cliente_form = (email, nome, endereco, data_nascimento, cep, telefone) => {
  return(dispatch) => {
    AsyncStorage.getItem('cliente_id', (err, response) => {
      cliente_form_sucess(dispatch, response, email, nome, endereco, data_nascimento, cep, telefone);
    })
  }
};

const cliente_form_sucess = (dispatch, id_revendendor, email, nome, endereco, data_nascimento, cep, telefone) => {
  axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/cliente.php', {
    params: {
      opcao: 'gerar_cliente',
      email: email,
      nome: nome,
      endereco: endereco,
      data_nascimento: data_nascimento,
      cep: cep,
      telefone: telefone,
      id_revendendor: id_revendendor
    }
  })
  .then(response => {
    // console.log(response.data);
    if(response.data == 'error-nome') dispatch({type: CLIENTE_FORM_ERROR_EMAIL, payload: response.data})
    if(response.data == 'error-id') dispatch({type: CLIENTE_FORM_ERROR_ID, payload: response.data})
    if(response.data != 'error-nome' && 'error-id') dispatch({type: CLIENTE_FORM_SUCESS, payload: response.data})


  });
}

// dispatch({type: CLIENTE_FORM_SUCESS, payload: response})
