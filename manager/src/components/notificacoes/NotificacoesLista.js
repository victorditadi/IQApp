import React, { Component } from 'react';
import { View, ScrollView, AsyncStorage, RefreshControl, Text } from 'react-native';
import axios from 'axios';
import  NotificacoesDetalhes  from './NotificacoesDetalhes';
import { ButtonHome } from '../common';
import { connect } from 'react-redux';
import { fetch_notes, clienteInfo } from '../../actions';

class NotificacoesLista extends Component {

  componentWillMount(){
    this.props.fetch_notes();
  }

  componentDidMount(){
    console.log(this.props.listNotes);
  }

  render() {
    return(
      <ScrollView style={{flex:1, backgroundColor: '#e6e6e6'}}>

      </ScrollView>
    );
  }
};

const mapStateToProps = ({note}) => {
  const { cliente_id, listNotes } = note;
  return { cliente_id, listNotes };
}

export default connect(mapStateToProps, {fetch_notes, clienteInfo})(NotificacoesLista);
