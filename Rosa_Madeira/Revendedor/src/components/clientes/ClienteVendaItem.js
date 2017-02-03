import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { CardSection, Card, Button } from '../common/card_produto';
import { Actions } from 'react-native-router-flux';

class ClienteVendaItem extends Component {

  detalheProduto(id_venda, id_cliente){
    Actions.cliente_venda_produto({id_venda: id_venda, id_cliente: id_cliente, passProps: true, type: 'reset'});
  }

  render() {
    const { id_cliente, status, data, numero_produto, id_venda, valor } = this.props.clienteVenda;
    const {
      headerContentStyle,
      thumbnailStyle,
      thumbnailContentStyle,
      titleStyle,
      imageStyle,
      iconStyle } = styles;

      return(
        <Card>
          <CardSection>
            <View style={thumbnailContentStyle}>
              <Icon name='ios-cart' style={iconStyle}/>
              {/* <Text>Teste</Text> */}
            </View>

            <View style={headerContentStyle}>
              <Text style={titleStyle}> ID Venda: {id_venda}</Text>
              <Text style={titleStyle}> ID Cliente: {id_cliente}</Text>
            </View>
          </CardSection>

          <CardSection>
            <Text style={titleStyle}>Status: {status}</Text>
          </CardSection>
          <CardSection>
            <Text style={titleStyle}>
              Data Venda: {data}
            </Text>
          </CardSection>

          <CardSection>
            <Text style={titleStyle}>
              Valor: {valor}
            </Text>
          </CardSection>

          <CardSection>
            <Button onPress={() => this.detalheProduto(id_venda, id_cliente)}>
              Produtos
            </Button>

          </CardSection>
        </Card>

    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleStyle: {
    fontSize: 18,
    color: '#ede6de'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContentStyle:{
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  },
  iconStyle: {
    fontSize: 20,
    color: 'black'
  }
}
export default ClienteVendaItem;
