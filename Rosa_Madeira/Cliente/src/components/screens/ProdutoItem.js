import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';

class ProdutoItem extends Component {
  render(){
    const { categoria, valor, nome_produto } = this.props.listProdutos;
    return(
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail/>
                            <Text>{nome_produto}</Text>
                            <Text note>{categoria}</Text>
                        </CardItem>

                        <CardItem>
                            <Image style={{ resizeMode: 'cover', width: null }} source={{uri: 'https://http2.mlstatic.com/S_760501-MLB20327520163_062015-Y.jpg' }}/>
                        </CardItem>

                        <CardItem>
                            <Text>{valor}</Text>
                        </CardItem>
                   </Card>
    );
  }

};

export default ProdutoItem;
