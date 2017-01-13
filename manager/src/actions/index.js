import firebase from 'firebase';
import axios from 'axios';


import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS} from './types';

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
    axios.get('http://52.7.254.69/cliente/appMobile/index.php', {
      params: {
        login: email,
        password: password
        }
      })
        .then(user => {
          dispatch({ type: LOGIN_USER_SUCESS, payload: user });
        });
  };
};
