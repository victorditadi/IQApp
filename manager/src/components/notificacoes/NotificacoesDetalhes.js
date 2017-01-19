import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Icon, Button } from 'native-base';
import { Card, CardSection, ButtonForm } from '../common';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class NotificacoesDetalhes extends Component {

  renderContent(){
    const {
          headerContentStyle,
          thumbnailStyle,
          thumbnailContentStyle,
          titleStyle,
          imageStyle,
          iconStyle,
          containerStyle } = styles;

    
  }

  render(){
    return(
      <View>
        {this.renderContent()}
      </View>
    );
  }
}


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
  },
  titleStyle: {
    fontSize: 18,
    marginBottom: 5
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
    fontSize: 50,
    color: '#737373'
  },
  containerStyle:{
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#f2f2f2",
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#cccccc',
    position: 'relative'
  }
}

export default NotificacoesDetalhes;
