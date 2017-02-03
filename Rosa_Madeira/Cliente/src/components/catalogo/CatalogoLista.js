import React, { Component } from 'react';
import { View, ListView, RefreshControl, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { fetch_catalogo } from '../../actions';
import CatalogoItem from './CatalogoItem';
import { Actions } from 'react-native-router-flux';

class CatalogoLista extends Component {

  componentWillMount() {
    this.props.fetch_catalogo();
    this.createDataSource(this.props)
    // const { carrinhoLista } = this.props;
    // console.log(this.props);

    Actions.refresh({rightTitle: 'Carrinho', onRight: () => Actions.carrinho({type:'reset', listCarrinho: this.props.carrinhoLista}), rightButtonTextStyle: { color:'white'} });
  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps)
  }

  createDataSource({listCatalogo}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listCatalogo);
  }

  renderRow(listCatalogo) {
    return <CatalogoItem catalogoLista={listCatalogo} />
  }

  _onRefresh(){
    setTimeout(() => {
      this.props.fetch_catalogo();
      }, 1000);
  }


  render(){
    return(
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        style={{marginTop: 70}}
        />
    );
  }
}

const mapStateToProps = state => {


  const listCatalogo = _.map(state.catalogo.catalogoLista, (key, value) => {
    return { ...key, value };
  });
  const { refreshing } = state.catalogo;
  const { carrinhoLista } = state.carrinho;
  return { listCatalogo, refreshing, carrinhoLista };

}

export default connect(mapStateToProps, {fetch_catalogo})(CatalogoLista);
