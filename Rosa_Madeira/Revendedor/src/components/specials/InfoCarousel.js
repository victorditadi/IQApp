import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');
const Styles = {
  viewStyle:{
    justifyContent:'center',
    alignItems: 'center',
    flex: 1
  },
  iconStyle: {
    fontSize: 130,
    color: 'white'
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    margin: 20,
    textAlign: 'center'
  }
}
const { viewStyle, iconStyle, textStyle } = Styles;

class InfoCarousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            size: { width, height },
        };
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    render() {
        return (
            <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
                <Carousel
                    delay={3000}
                    style={this.state.size}
                    autoplay = {true}
                    pageInfo = {false}
                    bullets  = {true}
                >
                    <View style={viewStyle}>
                        <Icon name='ios-log-in-outline' style={iconStyle}/>
                        <Text style={textStyle}> Crie seu Cadastro no site da Rosa Madeira
                          </Text>
                    </View>
                    <View style={viewStyle}>
                        <Icon name='ios-list-box-outline' style={iconStyle}/>
                        <Text style={textStyle}>
                          Mostre para clientes o Catalogo da Rosa Madeira
                        </Text>
                    </View>
                    <View style={viewStyle}>
                        <Icon name='ios-cash-outline' style={iconStyle}/>
                        <Text style={textStyle}>
                          Ganhe boas comissões com a sua venda
                        </Text>
                    </View>
                    <View style={viewStyle}>
                        <Icon name='ios-trending-up' style={iconStyle}/>
                        <Text style={textStyle}>
                          Sempre que o seu cliente fizer uma compra,
                          {'\n'}
                          você irar ganhar uma comissão
                        </Text>
                    </View>
                </Carousel>
            </View>
        );
    }
}

export default InfoCarousel;
