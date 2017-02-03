import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { CardSection, Card, Button } from '../common/card_produto';
import { Actions } from 'react-native-router-flux';

class ClienteItem extends Component {

  detalheProduto(codigo_cliente){
    Actions.cliente_venda({codigo_cliente: codigo_cliente, type:'reset'});
  }

  render() {
    const { nome_cliente, codigo_cliente, cep, endereco, telefone } = this.props.listClientes;
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
              {/* <Icon name='ios-person' style={iconStyle}/> */}
              <Text style={titleStyle}>{codigo_cliente}</Text>
            </View>

            <View style={headerContentStyle}>
              <Text style={titleStyle}>{nome_cliente}</Text>
              {/* <Text style={titleStyle}> ID: {codigo_cliente}</Text> */}
            </View>
          </CardSection>

          <CardSection>
            <Text style={titleStyle}>Telefone: {telefone}</Text>
          </CardSection>

          <CardSection>
            <Text style={titleStyle}>CEP: {cep}</Text>
          </CardSection>
          <CardSection>
            <Text style={titleStyle}>
              Endereço: {endereco}
            </Text>
          </CardSection>

          <CardSection>
            <Button onPress={() => this.detalheProduto(codigo_cliente)}>
              Vendas
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
export default ClienteItem;
