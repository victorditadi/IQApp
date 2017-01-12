import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { LoginScreen, InitScreen, NoteScreen, ContaScreen, HomeScreen } from './components/screens';
import { Spinner, RefreshIcon } from './components/common';
import { Icon } from 'native-base';

const TabIcon = ({ selected, title, iconName }) => {
  var color = selected ? '#603C8F' : '#3D3C3C';
  return (
    <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
    <Icon style={{color: color}} name={iconName || "circle"} size={18}/>
    <Text style={{color: color, fontSize: 12}}>{title}</Text>
    </View>
  );
}

const Sair = () => {
  return(
    <Text>Sair</Text>
  );
}

class RouterComponent extends Component{

  render(){
    return(
      <Router>
        <Scene key='root'>
          <Scene key='init' initial type='reset' hideNavBar>
            <Scene key='initScreen' component={InitScreen} />
            <Scene key='loginScreen' component={LoginScreen} />
          </Scene>
          <Scene key='main' >
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

                {/* <Scene key='relat-tab'
                  title='Relatorios'
                  iconName="ios-trending-up"
                  icon = {TabIcon} >

                <Scene key='relatorio'
                  title={'Relatorios'}
                  component={NoteScreen}
                  titleStyle={{color: 'white'}}
                  navigationBarStyle={{backgroundColor: '#715696'}}
                  />
                </Scene> */}

                <Scene key='conta-tab'
                  title='Minha Conta'
                  iconName="ios-person"
                  icon = {TabIcon} >

                <Scene key='conta'
                  title={'Minha Conta'}
                  component={ContaScreen}
                  titleStyle={{color: 'white'}}
                  navigationBarStyle={{backgroundColor: '#715696'}} />
                </Scene>

                </Scene>

            </Scene>
          </Scene>
      </Router>
  );
}};


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

{/* <Scene key='telaInicial'  initial={true} type="reset" hideNavBar>
   <Scene key='homeInit' component={HomeInit}  />
   <Scene key='login' component={LoginForm} title={'IQMail'}  />
</Scene>

<Scene key='main' type="reset">
  <Scene key='home' component={Home} title={'Notificações'} type="reset" />
</Scene> */}
