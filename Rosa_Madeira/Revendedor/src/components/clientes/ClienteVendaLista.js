import React, { Component } from 'react';
import { ScrollView, RefreshControl, ListView } from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import { ButtonHome } from '../common';
import { connect } from 'react-redux';
import { fetch_cliente_venda } from '../../actions';
import ClienteVendaItem from './ClienteVendaItem';

class ClienteVendaLista extends Component {

  componentWillMount(){
    // console.log(this.props);
    this.props.fetch_cliente_venda(this.props.codigo_cliente);
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps){
    // console.log("REFRESH -> "+ this.props.refreshing);
    this.createDataSource(nextProps)
  }

  createDataSource({listClienteVenda}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listClienteVenda);
  }

  renderRow(listClienteVenda) {
    return <ClienteVendaItem clienteVenda={listClienteVenda} />
  }

  _onRefresh(){
    setTimeout(() => {
      this.props.fetch_cliente_venda(this.props.codigo_cliente);
      }, 1000);
  }

  render() {
    return(
      <ScrollView
        style={{flex:1, backgroundColor: '#ede6de', marginTop: 20, marginBottom: 60}}
        refreshControl={
          <RefreshControl
                refreshing={this.props.refreshing}
                onRefresh={this._onRefresh.bind(this)}
                tintColor="transparent"
                />
          }>
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
  // console.log(state);
  const listClienteVenda = _.map(state.clientes.listVendaCliente.data, (key, value) => {
    return { ...key, value };
  });
  const refreshing = state.vendas.isRefreshing;

  return { listClienteVenda, refreshing };
};

export default connect(mapStateToProps, {fetch_cliente_venda})(ClienteVendaLista);
