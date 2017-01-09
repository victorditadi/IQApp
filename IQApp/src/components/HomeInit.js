import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import InfoCarousel from './InfoCarousel';
import { ButtonHome, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

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
        // backgroundColor: '#715696'
    },
    fundoButton: {
        flex: 0.3,
        // backgroundColor: '#603C8F',
        flexDirection: 'row'
    }
};

const { fundoLogo, fundoScreen, fundoButton } = styles;

class HomeInit extends Component {

    constructor(props) {
        super(props);
        this.state = { carousel: <InfoCarousel />, statusLogin: '' };

        AsyncStorage.getItem("isLogin").then((response) => {
          this.setState({"statusLogin": response});
        }).done( () => {
          console.log('STATUS LOGIN -> '+this.state.statusLogin);
          if(this.state.statusLogin === "true") Actions.main();
        });
    }
    
    onPressButton(){
      Actions.login();
    }

    render(){
    return (
        <View style = {{flex: 1}}>
            {/* <View style = {fundoLogo}>
                <Image source={require('../assets/img/logo-iqmail.png')} />
            </View> */}
            <View style = {fundoScreen}>
                {this.state.carousel}
            </View>
            <View style = {fundoButton}>
              {/* <ButtonHome color='#3D3C3C'>
                Cadastrar
              </ButtonHome> */}
              <ButtonHome color='#3D3C3C' onPress={() => this.onPressButton(this)}>
                Login
              </ButtonHome>
            </View>
        </View>
    );
    }
};



export default HomeInit
