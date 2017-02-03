import { FETCH_CLIENTES_SUCESS, FETCH_CLIENTE_VENDAS_SUCESS } from '../actions/types';


const INITIAL_STATE = {
  listClientes: '',
  listVendaCliente: '',
  isRefreshing: false,
};


export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case FETCH_CLIENTES_SUCESS:
      // console.log(action.payload);
      return { ...state, listClientes: action.payload};

    case FETCH_CLIENTE_VENDAS_SUCESS:
      // console.log(action.payload);
    return { ...state, listVendaCliente: action.payload};

    default:
      return state;
  }
};
