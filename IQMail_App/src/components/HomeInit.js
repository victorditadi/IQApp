import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import InfoCarousel from './InfoCarousel';
import { ButtonHome, CardSection } from './common';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = {
    fundoLogo: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * .1
    },
    fundoScreen: {
        flex: 3,
        backgroundColor: '#715696'
    },
    fundoButton: {
        flex: 0.4,
        backgroundColor: '#603C8F',
        flexDirection: 'row'
    }
};

const { fundoLogo, fundoScreen, fundoButton } = styles;

class HomeInit extends Component {

    constructor(props) {
        super(props);
        carousel = <InfoCarousel />
        this.state = { carousel: carousel } ;
    }


    render(){
    return (
        <View style = {{flex: 1, backgroundColor: '#715696'}}>
            <View style = {fundoLogo}>
                <Image source={require('../assets/img/logo-iqmail.png')} />
            </View>
            <View style = {fundoScreen}>
                {this.state.carousel}
            </View>
            <View style = {fundoButton}>
              {/* <ButtonHome color='#3D3C3C'>
                Cadastrar
              </ButtonHome> */}
              <ButtonHome color='#3D3C3C'>
                Login
              </ButtonHome>
            </View>
        </View>
    );
    }
};



export default HomeInit
