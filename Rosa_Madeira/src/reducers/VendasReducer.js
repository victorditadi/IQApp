import { FETCH_VENDAS_SUCESS } from '../actions/types';


const INITIAL_STATE = {};


export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case FETCH_VENDAS_SUCESS:
      // console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};
