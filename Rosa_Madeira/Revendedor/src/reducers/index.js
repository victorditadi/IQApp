import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import VendasReducer from './VendasReducer';
import ClientesReducer from './ClientesReducer';
import ClienteFormReducer from './ClienteFormReducer';

export default combineReducers({
  auth: AuthReducer,
  vendas: VendasReducer,
  clientes: ClientesReducer,
  cliente_form: ClienteFormReducer
});
