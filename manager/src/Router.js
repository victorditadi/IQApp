import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './components/screens/LoginScreen';
import InitScreen from './components/screens/InitScreen';
import HomeScreen from './components/screens/HomeScreen';
import NoteScreen from './components/screens/NoteScreen';

const TabIcon = ({ selected, title, iconName }) => {
  var color = selected ? '#603C8F' : '#3D3C3C';
  return (
    <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
    <Icon style={{color: color}} name={iconName || "circle"} size={18}/>
    <Text style={{color: color, fontSize: 12}}>{title}</Text>
    </View>
  );
}

const RouterComponent = () => {
  return (
    <Router>
        <Scene key='init' initial type='reset' hideNavBar>
          <Scene key='initScreen' component={InitScreen} />
          <Scene key='loginScreen' component={LoginScreen} />
        </Scene>

        <Scene key='main'>
          <Scene key='tabbar'
            tabs={true}
            tabBarStyle={Styles.viewTabStyle}>

            <Scene key='home-tab'
              title={'Home'}
              title='Inicio'
              iconName="ios-home"
              icon = {TabIcon} >

              <Scene key='home'
                title={'Inicio'}
                titleStyle={{color: 'white'}}
                component={HomeScreen}
                navigationBarStyle={{backgroundColor: '#715696'}}
                />
              </Scene>

              <Scene key='not-tab'
                title='Notificações'
                iconName="ios-mail"
                icon = {TabIcon} >

              <Scene key='notes'
                title={'Notificações'}
                component={NoteScreen}
                titleStyle={{color: 'white'}}
                navigationBarStyle={{backgroundColor: '#715696'}} />
              </Scene>

          </Scene>
        </Scene>
    </Router>
  );
};

const Styles = {
  viewTabStyle: {
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'whitesmoke',
    borderBottomWidth: 0,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
}

export default RouterComponent;
