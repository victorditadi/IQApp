import { FETCH_COMPRAS_SUCESS, FETCH_LISTA_PRODUTOS } from '../actions/types';

INITIAL_STATE = {
  compraLista: '',
  listProdutos: ''
};

export default ( state = INITIAL_STATE, action ) => {
  // console.log(action);

  switch(action.type){
    case FETCH_COMPRAS_SUCESS:
      return {...state, compraLista: action.payload};
    case FETCH_LISTA_PRODUTOS:
    // console.log(action);
      return {...state, listProdutos: action.payload};
    default:
      return state;
  }
}
