import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ContaReducer from './ContaReducer';
import ComprasReducer from './ComprasReducer';
import CatalogoReducer from './CatalogoReducer';
import CarrinhoReducer from './CarrinhoReducer';

export default combineReducers({
  auth: AuthReducer,
  conta: ContaReducer,
  compra: ComprasReducer,
  catalogo: CatalogoReducer,
  carrinho: CarrinhoReducer
});
