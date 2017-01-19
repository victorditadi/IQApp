import { FETCH_NOTES_SUCESS } from '../actions/types';


const INITIAL_STATE = {
  cliente_id: '',
  listNotes: '',

 };


export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case FETCH_NOTES_SUCESS:
      console.log(action.payload);
      return {...state, listNotes: action.payload};

    default:
      return state;
  }
};
