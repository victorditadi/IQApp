import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './components/screens/LoginScreen';
import InitScreen from './components/screens/InitScreen';
import HomeScreen from './components/screens/HomeScreen';
import NoteScreen from './components/screens/NoteScreen';
import ContaScreen from './components/screens/ContaScreen';
import VendaScreen from './components/screens/VendaScreen';
import ClienteScreen from './components/screens/ClienteScreen';

const TabIcon = ({ selected, title, iconName }) => {
  var color = selected ? '#957550' : '#3D3C3C';
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

            <Scene key='venda-tab'
              title='Vendas'
              iconName="ios-pricetags-outline"
              icon = {TabIcon} >

              <Scene key='home'
                title={'Vendas'}
                titleStyle={{color: 'white'}}
                component={VendaScreen}
                navigationBarStyle={{backgroundColor: '#957550'}}
                />
              </Scene>

              <Scene key='not-tab'
                title='Catalogo'
                iconName="ios-list-outline"
                icon = {TabIcon} >

              <Scene key='catalogo'
                title={'Catalogo'}
                component={VendaScreen}
                titleStyle={{color: 'white'}}
                navigationBarStyle={{backgroundColor: '#957550'}} />
              </Scene>

              <Scene key='cliente-tab'
                title='Cliente'
                iconName="ios-people-outline"
                icon = {TabIcon} >

              <Scene key='cliente'
                title={'Cliente'}
                component={VendaScreen}
                titleStyle={{color: 'white'}}
                navigationBarStyle={{backgroundColor: '#957550'}} />
              </Scene>

              <Scene key='conta-tab'
                title='Minha Conta'
                iconName="ios-person-outline"
                icon = {TabIcon} >

              <Scene key='conta'
                title={'Minha Conta'}
                component={ContaScreen}
                titleStyle={{color: 'white'}}
                navigationBarStyle={{backgroundColor: '#957550'}} />
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
