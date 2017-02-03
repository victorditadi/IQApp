import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { CardSection, Card, Button } from '../common/card_produto';
import { Icon } from 'native-base';

class ProdutoItem extends Component {

  render() {
    const { categoria, nome_produto, valor } = this.props.listProdutos;
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
            {/* <View style={thumbnailContentStyle}>
              <Icon name='ios-pricetag' style={iconStyle}/>
              <Text>Teste</Text>
            </View> */}

            <View style={headerContentStyle}>
              <Text style={titleStyle}>Produto: {nome_produto}</Text>
            </View>
          </CardSection>
          <CardSection>
            <Text style={{color: 'white'}}>Categoria: {categoria}</Text>
          </CardSection>

          <CardSection>
            <Image style={imageStyle} source={{uri: 'https://http2.mlstatic.com/S_760501-MLB20327520163_062015-Y.jpg' }} />
          </CardSection>

          <CardSection>
            <Text style={titleStyle}>
              Valor Produto: {valor}
            </Text>
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
    color: 'white'
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

export default ProdutoItem;
