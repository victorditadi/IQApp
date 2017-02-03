import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import { CODE_CHANGED, LOGIN_USER_START, LOGIN_USER_SUCESS, LOGIN_USER_FAIL, LOGIN_USER_SIGNOFF } from './types';

export const codeChanged = (text) => {
  return {
    type: CODE_CHANGED,
    payload: text
  };
};

export const verifyLogin = (code) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER_START });

      axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/index.php', {
        params: {
          opcao: 'login_cliente',
          codigo: code
          }
        })
          .then(user => loginUserCheck(dispatch, user));
  }
}

const loginUserCheck = (dispatch, user) => {
  console.log(user);
  if(user.data != ''){
    dispatch({type: LOGIN_USER_SUCESS, payload: user});
    AsyncStorage.setItem("isLogin", true.toString());
    AsyncStorage.setItem("cliente_id", user.data.cliente_id);
    AsyncStorage.setItem("cliente_nome", user.data.nome);
    AsyncStorage.setItem("cliente_codigo", user.data.codigo);

    Actions.main({type: 'reset'});
  }
  if(user.data == '') dispatch({type: LOGIN_USER_FAIL, payload: user});
};

export const signOff = () => {
  return (dispatch) => {
    AsyncStorage.setItem("isLogin", false.toString());
    AsyncStorage.setItem("cliente_id", '');
    AsyncStorage.setItem("cliente_nome", '');
    AsyncStorage.setItem("cliente_codigo", '');
    Actions.init();
    dispatch({type: LOGIN_USER_SIGNOFF });
  }
};
