import { CLIENTE_FORM_SUCESS,
EMAIL_CHANGED_CLIENTE,
PASSWORD_CHANGED,
DATA_NASCIMENTO_CHANGED,
ENDERECO_CHANGED,
CEP_CHANGED,
NOME_CHANGED,
TELEFONE_CHANGED,
CLIENTE_FORM_ERROR_ID,
CLIENTE_FORM_ERROR_EMAIL } from '../actions/types';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cep: '',
  endereco: '',
  codigo: '',
  telefone: '',
  data_nascimento: '',
  error: ''
};

export default (state = INITIAL_STATE, action ) => {

  switch(action.type){
    case EMAIL_CHANGED_CLIENTE:
      return { ...state, email: action.payload};

    case NOME_CHANGED:
      return { ...state, nome: action.payload};

    case DATA_NASCIMENTO_CHANGED:
      return { ...state, data_nascimento: action.payload};

    case ENDERECO_CHANGED:
      return { ...state, endereco: action.payload};

    case CEP_CHANGED:
      return { ...state, cep: action.payload};

    case TELEFONE_CHANGED:
        return { ...state, telefone: action.payload}

    case CLIENTE_FORM_ERROR_EMAIL:
        return { ...state, error: 'Ops, email incorreto ou não preenchido', codigo: ''}

    case CLIENTE_FORM_ERROR_ID:
        return { ...state, error: 'Ops, encontramos um erro no seu ID de Revendedor, entre em contato com suporte@e-catalog.com', codigo: ''}

    case CLIENTE_FORM_SUCESS:
      return {...state, ...INITIAL_STATE, codigo: action.payload};

    default:
      return state;
  }
};
