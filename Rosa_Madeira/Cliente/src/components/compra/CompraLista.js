import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, ListView } from 'react-native';
import _ from 'lodash';
// import { ButtonHome } from '../common';
import { connect } from 'react-redux';
import { fetch_compras } from '../../actions';
import CompraItem from './CompraItem';

class CompraLista extends Component {

  componentWillMount (){
    this.props.fetch_compras();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    this.createDataSource(nextProps)
  }

  createDataSource({listCompras}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listCompras);
  }

  renderRow(listCompras) {
    return <CompraItem listCompras={listCompras} />
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
          style={{marginTop: 50}}
          />
      </ScrollView>
    );
  }
};

const mapStateToProps = state => {
  const listCompras = _.map(state.compra.compraLista, (key, value) => {
    return { ...key, value };
  });

  // console.log(state);

  const { refreshing } = state.compra;

  return { listCompras, refreshing };
}

export default connect(mapStateToProps, {fetch_compras})(CompraLista);
