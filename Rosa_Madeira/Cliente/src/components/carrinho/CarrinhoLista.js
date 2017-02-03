import React, { Component } from 'react';
import { View, Text, ListView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetch_carrinho } from '../../actions';
import CarrinhoItem from './CarrinhoItem';
import { Button } from 'native-base';


class CarrinhoLista extends Component {

  componentWillMount(){
    this.props.fetch_carrinho(this.props);
    this.createDataSource(this.props);

  }

  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps);
  }

  createDataSource({carrinhoProdutos}) {
    if(carrinhoProdutos == null ) carrinhoProdutos = [];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(carrinhoProdutos);
  }

  renderRow(carrinhoProdutos) {
      if(carrinhoProdutos == '') return false;

    return <CarrinhoItem carrinhoLista={carrinhoProdutos} />
  }

  render(){
    if(this.props.carrinhoProdutos == null){
      return(
        <View style={{flex: 1, backgroundColor: '#f6f2ef', justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontSize: 30, color: '#957550', opacity: 0.8}}>
            Carrinho Vazio
          </Text>
       </View>
      );
    }
    return(
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          style={{marginTop: 64}}
          />
    );
  }
};

const mapStateToProps = state => {
  // console.log('LANÇANDO UM NOVO PROPS');
  const { carrinhoProdutos } = state.carrinho;
  return { carrinhoProdutos };

}

export default connect(mapStateToProps, {fetch_carrinho})(CarrinhoLista);
