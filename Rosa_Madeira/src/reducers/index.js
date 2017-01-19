import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import VendasReducer from './VendasReducer';

export default combineReducers({
  auth: AuthReducer,
  vendas: VendasReducer
});
