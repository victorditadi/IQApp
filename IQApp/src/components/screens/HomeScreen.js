import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class HomeScreen extends Component {
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
        <View style = {styles.fundoLogo}>
            <Image style={{width: 300, height: 300}} source={require('../../assets/img/IQmail_Logo_1.png')} />
        </View>
        <View style = {styles.fundoLogo}>
            <Text style={{fontSize: 18, color: '#715696', opacity: 0.8}}>
              Bem Vindo ao Assistente Virtual IQMail!{'\n'}
              Use o menu para acessar o que deseja.
            </Text>
        </View>
      </View>
    );
  }
}

const styles = {
    fundoLogo: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
    }
  };

export { HomeScreen };
