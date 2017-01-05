import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { ButtonForm, CardSection, Base, Header } from './components/common';
import LoginForm from './components/LoginForm';
import SplashScreen from './components/SplashScreen';
import HomeInit from './components/HomeInit';

class App extends Component {

  state = { statusLogin: null };

  componentWillMount(){
    AsyncStorage.getItem("isLogin").then((yes) => {
    this.setState({"statusLogin": true});
    }).done();

  }

  renderContent() {

    switch(this.state.statusLogin){
      case true:
        return <Header headerText="IQMail" />

      case false:
        return(
          <Base style={{flex:1}}>
              <LoginForm />
          </Base>
        );

      default:
      return(
        <HomeInit />
      );
      break;

    }

  }


  render() {
    console.log("STATUS -> " + this.state.statusLogin);
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
            {this.renderContent()}
        </View>
      </View>
    );
  }
}


export default App;
