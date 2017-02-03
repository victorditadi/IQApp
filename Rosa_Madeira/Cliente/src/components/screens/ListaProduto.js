import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, ListView } from 'react-native';
import _ from 'lodash';
// import { ButtonHome } from '../common';
import { connect } from 'react-redux';
import { fetch_compras, fetch_lista_produtos } from '../../actions';
import ProdutoItem from './ProdutoItem';

class ProdutoLista extends Component {

  componentWillMount (){
    this.props.fetch_lista_produtos(this.props.id_compra);
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    this.createDataSource(nextProps)
  }

  createDataSource({listProdutos}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listProdutos);
  }

  renderRow(listProdutos) {
    // console.log(listProdutos);
      return <ProdutoItem listProdutos={listProdutos} />
  }

  _onRefresh(){
    setTimeout(() => {
      this.props.fetch_compras();
      }, 1000);
  }


  render(){
    return(
      <ScrollView
        style={{flex:1, backgroundColor: '#f6f2ef'}}
        >
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          style={{marginTop: 70, marginBottom: 50}}
          />
      </ScrollView>
    );
  }
};

const mapStateToProps = state => {
  const listProdutos = _.map(state.compra.listProdutos, (key, value) => {
    return { ...key, value };
  });

  const { refreshing } = state.compra;

  return { listProdutos, refreshing };
}

export default connect(mapStateToProps, {fetch_compras, fetch_lista_produtos})(ProdutoLista);
