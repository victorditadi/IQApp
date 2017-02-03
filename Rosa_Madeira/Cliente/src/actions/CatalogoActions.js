import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';

import { FETCH_CATALOGO_SUCESS } from './types';


export const fetch_catalogo = () => {
    return (dispatch) => {
        axios.get('http://52.200.153.44/cliente/rosamadeira/e_catalog/catalogo.php', {
            params: {
                opcao: 'listar_catalogo',
            }
        }).then(response => dispatch({type: FETCH_CATALOGO_SUCESS, payload: response.data}));
    }
  }
// dispatch({type: FETCH_COMPRAS_SUCESS, payload: response.data})
