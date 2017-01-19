import React, { Component } from 'react';
import { ScrollView, RefreshControl, ListView } from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import { ButtonHome } from '../common';
import { connect } from 'react-redux';
import { fetch_vendas, clienteInfo } from '../../actions';
import VendaItem from './VendaItem';

class VendasLista extends Component {

  componentWillMount(){
    this.props.fetch_vendas();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps)
  }

  createDataSource({listVendas}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listVendas);
  }

  renderRow(listVendas) {
    return <VendaItem listVendas={listVendas} />
  }

  render() {
    return(
      <ScrollView style={{flex:1, backgroundColor: '#ede6de'}}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          style={{marginTop: 50}}
          />
      </ScrollView>
    );
  }
};

const mapStateToProps = state => {
  const listVendas = _.map(state.vendas.data, (key, value) => {
    return { ...key, value };
  });

  return { listVendas };
};

export default connect(mapStateToProps, {fetch_vendas, clienteInfo})(VendasLista);
