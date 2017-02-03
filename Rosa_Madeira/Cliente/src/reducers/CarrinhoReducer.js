import {FETCH_CATALOGO_SUCESS, ADD_TO_CART, REMOVE_TO_CART, CHECK_TO_CART, FETCH_CARRINHO_SUCESS, REMOVE_TO_CART_PRODUTO, FETCH_CARRINHO_FAILED } from '../actions/types';

INITIAL_STATE = {
  carrinhoLista: [],
  carrinhoProdutos: [],
  refresh: false
};

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type){

    case ADD_TO_CART:
      return { ...state, carrinhoLista: [...state.carrinhoLista, parseInt(action.payload, 10)] }

    case REMOVE_TO_CART:
      id = action.payload;
      index = state.carrinhoLista.indexOf(parseInt(id, 10));
      state.carrinhoLista.splice(index, 1);
      return {...state };

    case REMOVE_TO_CART_PRODUTO:
      id = action.payload;
      arrayCompleto = state.carrinhoProdutos;
      index = arrayCompleto.findIndex(obj => obj.id == id);
      arrayCompleto.splice(index, 1);
      return {...state, carrinhoProdutos: [...state.carrinhoProdutos, arrayCompleto]};

    case FETCH_CARRINHO_SUCESS:
      return {...state, carrinhoProdutos: action.payload};
    case FETCH_CARRINHO_FAILED:
      return {...state, carrinhoProdutos: null};
    default:
      return state;
  }
};
