import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import { ButtonHome, CardSection } from '../common';
import InfoCarousel  from '../specials/InfoCarousel';
import { Actions } from 'react-native-router-flux';



class InitScreen extends Component {

  constructor(props){
    super(props);
    this.state = { carousel: <InfoCarousel />, statusLogin:'' };

    AsyncStorage.getItem("isLogin").then((response) => {
      this.setState({"statusLogin": response});
    }).done( () => {
      if(this.state.statusLogin === "true") Actions.main();
    });
  }

  onPressButton(){
      Actions.loginScreen();
  }


  render() {
    const { fundoLogo, fundoScreen, fundoButton } = styles;


    return (
      <View style = {{flex: 1, backgroundColor: '#715696'}}>
          <View style = {fundoLogo}>
              <Image source={require('../../assets/img/logo-iqmail.png')} />
          </View>
          <View style = {fundoScreen}>
              {this.state.carousel}
          </View>
          <View style = {fundoButton}>
            <ButtonHome color='#3D3C3C' onPress={() => this.onPressButton(this)}>
              Login
            </ButtonHome>
          </View>
      </View>
    );
  }
};

const styles = {
    fundoLogo: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#715696'
    },
    fundoScreen: {
        flex: 3,
        backgroundColor: '#715696',
        marginBottom: 40
    },
    fundoButton: {
        flex: 0.45,
        backgroundColor: '#603C8F',
        flexDirection: 'row'
    }
};

export default InitScreen;
