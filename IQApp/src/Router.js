import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import HomeInit from './components/HomeInit';
import Home from './components/Home';
import { Spinner } from './components/common';

class RouterComponent extends Component{

  render(){
    return(
      <Router>
        <Scene key='telaInicial'  initial={true} type="reset">
           <Scene key='homeInit' component={HomeInit} title={'IQMail'} type="reset"/>
           <Scene key='login' component={LoginForm} title={'IQMail'} type="reset" />
       </Scene>

        <Scene key='main' type="reset">
          <Scene key='home' component={Home} title={'Notificações'} type="reset"/>
        </Scene>

      </Router>
  );
};
}
export default RouterComponent;
