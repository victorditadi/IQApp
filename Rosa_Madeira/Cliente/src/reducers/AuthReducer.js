import { CODE_CHANGED, LOGIN_USER_START, LOGIN_USER_SUCESS, LOGIN_USER_FAIL } from '../actions/types';

INITIAL_STATE = {
  codigo: '',
  error: '',
  loading: false,
  user: ''
};

export default (state = INITIAL_STATE, action) => {

  switch(action.type){
    case CODE_CHANGED:
      return {...state, ...INITIAL_STATE, codigo: action.payload}

    case LOGIN_USER_START:
      return {...state, loading: true, error:''};

    case LOGIN_USER_SUCESS:
      return {...state, ...INITIAL_STATE, user: action.payload.data};

    case LOGIN_USER_FAIL:
      return {...state, error: 'Email ou senha incorretos!', codigo: '', loading: false};

    default:
      return state;
  }
};
