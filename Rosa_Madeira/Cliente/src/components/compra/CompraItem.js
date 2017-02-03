import React, { Component } from 'react';
import { Icon } from 'native-base';
import { CardSection, Button } from '../common/card_produto';
import { Container, Content, Card, CardItem, Text, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';

class CompraItem extends Component {

  detalheCompra(){
    const { id } = this.props.listCompras;    
    Actions.produtoLista({id_compra: id});
  }

  render() {
    const { data, valor, status, id } = this.props.listCompras;
    const {
      headerContentStyle,
      thumbnailStyle,
      thumbnailContentStyle,
      titleStyle,
      imageStyle,
      iconStyle } = styles;

    if(status == 'Finalizada') var color = '#33cc33';
    if(status == 'Pendente')   var color = '#ffcc00';
    // console.log(color)
      return(
                   <Card>
                       <CardItem header style={{backgroundColor: '#ede5de'}}>
                          <Icon name='ios-log-in-outline' style={{fontSize: 20, color:'black'}}/>
                           <Text>Compra ID: {id}</Text>
                       </CardItem>

                       <CardItem header style={{backgroundColor: '#f6f2ef'}}>
                           <Text>
                               Status: <Text style={{color: color}}>{status}</Text>
                           </Text>
                        </CardItem>
                        <CardItem header style={{backgroundColor: '#f6f2ef'}}>
                           <Text>
                               Valor: {valor}
                           </Text>
                       </CardItem>

                       <CardItem header style={{backgroundColor: '#f6f2ef'}}>
                           <Button onPress={this.detalheCompra.bind(this)}>Produtos</Button>
                       </CardItem>
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
export default CompraItem;
