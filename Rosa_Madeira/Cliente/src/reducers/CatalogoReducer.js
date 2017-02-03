import { FETCH_CATALOGO_SUCESS, CHECK_TO_CART } from '../actions/types';

INITIAL_STATE = {
  catalogoLista: '',
  refreshing: false,
};

export default ( state = INITIAL_STATE, action ) => {

  switch(action.type){
    case FETCH_CATALOGO_SUCESS:
      return {...state, catalogoLista: action.payload, status: false};

    default:
      return state;
  }
};
