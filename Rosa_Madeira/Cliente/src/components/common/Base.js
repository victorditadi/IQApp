import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Container, Content, Icon } from 'native-base';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = {
    fundoLogo: {
        flex: 1,
        marginTop: height * 0.2,
        alignItems: 'center',
    },
    conteudoStyle: {
      flexDirection: 'column',
      backgroundColor: '#715696',
      justifyContent: 'flex-end'
    },
};

const { fundoLogo, conteudoStyle } = styles;

const Base = ({ children }) => {
  return (
      <View style = {{flex: 1, backgroundColor: '#715696'}}>
          <View style = {fundoLogo}>
              <Image source={require('../../assets/img/logo-iqmail.png')} />
          </View>
          <View style = {conteudoStyle}>
            {children}
          </View>
      </View>
  );
}



export { Base };
