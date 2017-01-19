import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import { FETCH_VENDAS_SUCESS } from './types';

export const fetch_vendas = () => {
  return(dispatch) => {
    AsyncStorage.getItem('cliente_id', (err, response) => {
      fetch_vendas_form(dispatch, response);
    });

  }
};


const fetch_vendas_form = (dispatch, cliente_id) => {
  if(cliente_id != '') {
    axios.get('http://52.7.254.69/cliente/appMobile/notificacao.php?opcao=listar',{
      params: {
        cliente_id: cliente_id
      }
    })
      .then(response => dispatch({type: FETCH_VENDAS_SUCESS, payload: response}));
  }
}

// async carregarInfoCliente(){
//   try {
//     await AsyncStorage.multiGet(['cliente_id','cliente_hash'], (err, stores) => {
//       stores.map( (result, i, store) => {
//         this.setState({ cliente_id: store[0][1], cliente_hash: store[1][1] });
//         this.carregarNotificacoes();
//       });
//     });
//   } catch(error){
//     console.log(error);
//   }
// };
