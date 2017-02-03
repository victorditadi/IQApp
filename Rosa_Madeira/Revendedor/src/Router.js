import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginScreen from './components/screens/LoginScreen';
import InitScreen from './components/screens/InitScreen';
import HomeScreen from './components/screens/HomeScreen';
import NoteScreen from './components/screens/NoteScreen';
import ContaScreen from './components/screens/ContaScreen';
import VendaScreen from './components/screens/VendaScreen';
import ClienteScreen from './components/screens/ClienteScreen';
import CatalogoScreen from './components/screens/CatalogoScreen';
import GerarClienteForm from './components/screens/GerarClienteForm';
import ClienteVendaLista from './components/clientes/ClienteVendaLista';
import ListaProduto from './components/vendas/ListaProduto';

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

            <Scene key='not-tab'
              title='Catalogo'
              iconName="ios-list-outline"
              icon = {TabIcon} >

            <Scene key='catalogo'
              title={'Catalogo'}
              component={CatalogoScreen}
              titleStyle={{color: 'white'}}
              navigationBarStyle={{backgroundColor: '#957550'}} />
            </Scene>

            <Scene key='venda-tab'
              title='Vendas'
              iconName="ios-pricetags-outline"
              icon = {TabIcon}
              >

              <Scene key='home'
                title={'Vendas'}
                titleStyle={{color: 'white'}}
                component={VendaScreen}
                navigationBarStyle={{backgroundColor: '#957550'}}
                />

              <Scene key='produto'
                title={'Lista Produtos'}
                titleStyle={{color: 'white'}}
                component={ListaProduto}
                navigationBarStyle={{backgroundColor: '#957550'}}
                leftTitle='Voltar'
                onLeft={() => Actions.home({type:'reset'})}
                leftButtonTextStyle	 = {{ color:'white'}}
                type="reset"
                />
              </Scene>

              <Scene key='cliente-tab'
                title='Clientes'
                iconName="ios-people-outline"
                icon = {TabIcon} >

              <Scene key='cliente'
                title={'Clientes'}
                component={ClienteScreen}
                titleStyle={{color: 'white'}}
                navigationBarStyle={{backgroundColor: '#957550'}} />

              <Scene key='cliente_venda'
                  title={'Lista de Vendas'}
                  component={ClienteVendaLista}
                  titleStyle={{color: 'white'}}
                  navigationBarStyle={{backgroundColor: '#957550'}}
                  leftTitle='Voltar'
                  onLeft={() => Actions.cliente({type: 'reset'})}
                  leftButtonTextStyle	 = {{ color:'white'}}
                  />

              <Scene key='cliente_venda_produto'
                title={'Lista de Produtos'}
                component={ListaProduto}
                titleStyle={{color: 'white'}}
                navigationBarStyle={{backgroundColor: '#957550'}}
                leftButtonIconStyle = {{ tintColor:'white'}}
                // leftTitle='Voltar'
                // onLeft={() => Actions.cliente_venda({passProps: true, type:'reset'})}
                // leftButtonTextStyle	 = {{ color:'white'}}
                // type="reset"
                />

              <Scene key='gerar_cliente_form'
                title={'Gerar Cliente'}
                component={GerarClienteForm}
                titleStyle={{color: 'white'}}
                navigationBarStyle={{backgroundColor: '#957550'}}
                leftTitle='Voltar'
                onLeft={() => Actions.cliente({type:'reset'})}
                leftButtonTextStyle	 = {{ color:'white'}}
                type="reset"/>

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
