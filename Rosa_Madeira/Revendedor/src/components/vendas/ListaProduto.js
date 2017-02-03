import React, { Component } from 'react';
import { View, Text, ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetch_list_produtos } from '../../actions';
import _ from 'lodash';
import ProdutoItem from './ProdutoItem';
import { Actions } from 'react-native-router-flux';

class ListaProduto extends Component{

  componentWillMount(){
    // console.log(this.props);
      this.props.fetch_list_produtos(this.props.id_venda);
      this.createDataSource(this.props);
      
      if(this.props.sceneKey == "cliente_venda_produto"){
        Actions.refresh({
          leftTitle: 'Voltar',
          leftButtonTextStyle: {color:'white'},
          onLeft: () => Actions.cliente_venda({codigo_cliente:this.props.id_cliente, type:'reset'})
        })
      }
  }

  componentWillReceiveProps(nextProps){
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

  render(){
    return(
      <ScrollView style={{flex:1, backgroundColor: '#ede6de'}}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          style={{marginTop: 60, marginBottom: 60}}
          />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const listProdutos = _.map(state.vendas.listProdutos.data, (key, value) => {
    return { ...key, value };
  });
  // console.log(listProduto);
  return { listProdutos };
};

export default connect(mapStateToProps, {fetch_list_produtos})(ListaProduto);
