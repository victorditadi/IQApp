import { FETCH_VENDAS_SUCESS, FETCH_PRODUTOS_SUCESS } from '../actions/types';


const INITIAL_STATE = {
  listVendas:'',
  listProdutos: '',
  isRefreshing: false
};


export default (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case FETCH_VENDAS_SUCESS:
      // console.log(action.payload);
      return { ...state, listVendas: action.payload};

    case FETCH_PRODUTOS_SUCESS:
      // console.log(action.payload);
      return { ...state, listProdutos: action.payload};

    default:
      return state;
  }
};
