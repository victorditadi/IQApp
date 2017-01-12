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
    color: 'whitesmoke'
  },
  textStyle: {
    fontSize: 16,
    color: 'whitesmoke',
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
                        <Icon name='ios-mail' style={iconStyle}/>
                        <Text style={textStyle}> Envie emails marketings em massa,
                            {"\n"}
                            facil e rapido.
                          </Text>
                    </View>
                    <View style={viewStyle}>
                        <Icon name='ios-list-box' style={iconStyle}/>
                        <Text style={textStyle}>
                          Mais de 80 opções de Templates ja prontas para uso.
                        </Text>
                    </View>
                    <View style={viewStyle}>
                        <Icon name='ios-person-add' style={iconStyle}/>
                        <Text style={textStyle}>
                          Sem limites de Base de contatos, adicione quantos emails quiser.
                        </Text>
                    </View>
                    <View style={viewStyle}>
                        <Icon name='ios-trending-up' style={iconStyle}/>
                        <Text style={textStyle}>
                          Acompanhe suas Campanhas com relatorios tem tempo real
                        </Text>
                    </View>
                </Carousel>
            </View>
        );
    }
}

export { InfoCarousel }
