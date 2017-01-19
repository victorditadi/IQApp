import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
  } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
      type: PASSWORD_CHANGED,
      payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER_START });

    axios.get('http://52.7.254.69/cliente/appMobile/index.php', {
      params: {
        login: email,
        password: password
        }
      })
        .then(user => loginUserCheck(dispatch, user));
  };
};



const loginUserCheck = (dispatch, user) => {
  if(user.data != ''){
    dispatch({type: LOGIN_USER_SUCESS, payload: user});
    AsyncStorage.setItem("isLogin", true.toString());
    AsyncStorage.setItem("cliente_hash", user.data.password);
    AsyncStorage.setItem("cliente_id", user.data.cliente_id);
    AsyncStorage.setItem("cliente_nome", user.data.nome);
    Actions.main();
  }
  if(user.data == '') dispatch({type: LOGIN_USER_FAIL, payload: user});
};
