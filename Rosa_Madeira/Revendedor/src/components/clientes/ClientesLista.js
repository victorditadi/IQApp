import React, { Component } from 'react';
import { ScrollView, RefreshControl, ListView, View, Text } from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import { ButtonHome } from '../common';
import { Button } from '../common/card_produto';
import { connect } from 'react-redux';
import { fetch_clientes, cliente_form } from '../../actions';
import ClienteItem from './ClienteItem';
import { Actions } from 'react-native-router-flux';


class ClientesLista extends Component {

  componentWillMount(){
    this.props.fetch_clientes();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps)
  }

  createDataSource({listClientes}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listClientes);
  }

  renderRow(listClientes) {
    return <ClienteItem listClientes={listClientes} />
  }

  gerarCliente() {
    Actions.gerar_cliente_form({type:'reset'});
  }

  _onRefresh(){
    setTimeout(() => {
      this.props.fetch_clientes();
      }, 1000);
  }

  render() {
    return(
      <ScrollView style={{flex:1, backgroundColor: '#ede6de'}}
        refreshControl={
          <RefreshControl
                refreshing={this.props.isRefreshing}
                onRefresh={this._onRefresh.bind(this)}
                tintColor="transparent"
                />
          }>
        <View style={{ marginTop: 60}}>
          <Button onPress={() => this.gerarCliente()}>Gerar novo Cliente</Button>
        </View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          style={{marginTop: 10}}
          />
      </ScrollView>
    );
  }
};

const mapStateToProps = state => {
    // console.log(state);
  const { isRefreshing } = state.clientes;
  const listClientes = _.map(state.clientes.listClientes.data, (key, value) => {
    return { ...key, value };
  });

  return { listClientes, isRefreshing };
};

export default connect(mapStateToProps, {fetch_clientes, cliente_form})(ClientesLista);
