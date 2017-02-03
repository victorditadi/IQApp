import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class HomeScreen extends Component {
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#ede6de'}}>
        <View style = {styles.fundoLogo}>
            {/* <Image style={{width: 300, height: 300}} source={require('../../assets/img/IQmail_Logo_1.png')} /> */}
            {/* <Text style={{color: 'white', fontSize: 40}}>Rosa Madeira</Text> */}

        </View>
        <View style = {styles.fundoLogo}>
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

export default HomeScreen;
