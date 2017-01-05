import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ButtonForm, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import SplashScreen from './components/SplashScreen';
import HomeInit from './components/HomeInit';

class App extends Component {

  renderConteudo(){
    return <HomeInit />;
  }

  render(){
    return(
      <View style={{flex:1}}>
        <SplashScreen>
          <View style={{flex:1}}>
            {this.renderConteudo()}
          </View>
        </SplashScreen>
      </View>
    );
  }
};

export default App;
