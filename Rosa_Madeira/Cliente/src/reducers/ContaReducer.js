import { CLIENTE_NAME, CLIENTE_INFO, EMAIL_CHANGED_CLIENTE,
ENDERECO_CHANGED,
CEP_CHANGED,
NOME_CHANGED,
TELEFONE_CHANGED, LIMPAR_ATUALIZAR,ATUALIZAR_INFO_SUCESS, ATUALIZAR_INFO_START } from '../actions/types';

INITIAL_STATE = {
  nome: '',
  clienteInfo: '',
  email: '',
  endereco: '',
  cep: '',
  telefone: '',
  message: '',
  loading: false
};

export default (state = INITIAL_STATE, action)=> {
  // console.log(action);

  switch(action.type){
    case ATUALIZAR_INFO_SUCESS:
      return{...state, message: 'Dados Atualizados!', loading: false};

    case ATUALIZAR_INFO_START:
      return{...state, message: '', loading: true};

    case LIMPAR_ATUALIZAR:
      return {...state, nome: '', email: '', endereco: '', cep:'', telefone: '', message: 'Atualização Cancelada'};

    case CLIENTE_NAME:
      return {...state, nome: action.payload, message:''}

    case CLIENTE_INFO:
        // console.log(action.payload);
      return {...state, clienteInfo: action.payload, loading: false};

      case EMAIL_CHANGED_CLIENTE:
        return { ...state, email: action.payload, message:''};

      case NOME_CHANGED:
      // console.log(action.payload);
        return { ...state, nome: action.payload, message:''};

      case ENDERECO_CHANGED:
        return { ...state, endereco: action.payload, message:''};

      case CEP_CHANGED:
        return { ...state, cep: action.payload, message:''};

      case TELEFONE_CHANGED:
          return { ...state, telefone: action.payload, message:''}

    default:
      return state;
  }
};
