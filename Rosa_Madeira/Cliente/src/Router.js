import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';
import InitScreen from './components/screens/InitScreen';
import CatalogoScreen from './components/screens/CatalogoScreen';
import CompraScreen from './components/screens/CompraScreen';
import ListaProduto from './components/screens/ListaProduto';
import ContaScreen from './components/screens/ContaScreen';
import DadosScreen from './components/conta/DadoScreen';
import UpdateScreen from './components/conta/UpdateScreen';
import CarrinhoScreen from './components/screens/CarrinhoScreen';


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
      <Scene initial key='init' type='reset' hideNavBar>
        <Scene key='initScreen' component={InitScreen} />
      </Scene>

      <Scene key='main'>
        <Scene key='tabbar'
          tabs={true}
          tabBarStyle={Styles.viewTabStyle}
          >

          <Scene key='not-tab'
            title='Catalogo'
            iconName="ios-list-outline"
            icon = {TabIcon} >

          <Scene key='catalogo'
            title={'Catalogo'}
            component={CatalogoScreen}
            titleStyle={{color: 'white'}}
            navigationBarStyle={{backgroundColor: '#957550'}}
            // rightTitle= 'Carrinho'
            // rightButtonTextStyle = {{ color:'white'}}
            // onRight={() => Actions.carrinho({type:'reset'})}
            />

            <Scene key='carrinho'
              title={'Carrinho'}
              component={CarrinhoScreen}
              titleStyle={{color: 'white'}}
              navigationBarStyle={{backgroundColor: '#957550'}}
              leftTitle='Voltar'
              onLeft={() => Actions.catalogo({type:'reset'})}
              leftButtonTextStyle	= {{ color:'white'}}
              />
          </Scene>

          <Scene key='venda-tab'
            title='Compras'
            iconName="ios-pricetags-outline"
            icon = {TabIcon}
            >

            <Scene key='home'
              title={'Minhas Compras'}
              titleStyle={{color: 'white'}}
              component={CompraScreen}
              navigationBarStyle={{backgroundColor: '#957550'}}
              />

            <Scene key='produtoLista'
              title={'Lista Produtos'}
              titleStyle={{color: 'white'}}
              component={ListaProduto}
              navigationBarStyle={{backgroundColor: '#957550'}}
              leftTitle='Voltar'
              onLeft={() => Actions.home({type:'reset'})}
              leftButtonTextStyle	= {{ color:'white'}}
              type="reset"
              />
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

            <Scene key='meusDados'
                title={'Meus Dados'}
                component={DadosScreen}
                titleStyle={{color: 'white'}}
                navigationBarStyle={{backgroundColor: '#957550'}}
                leftTitle='Voltar'
                onLeft={() => Actions.conta({type:'reset'})}
                leftButtonTextStyle	= {{ color:'white'}}
                 />
               <Scene key='updateDados'
                 title={'Atualizar Dados'}
                 component={UpdateScreen}
                 titleStyle={{color: 'white'}}
                 navigationBarStyle={{backgroundColor: '#957550'}}
                 leftTitle='Voltar'
                 onLeft={() => Actions.conta({type:'reset'})}
                 leftButtonTextStyle	= {{ color:'white'}}
                  />
            </Scene>

        </Scene>
      </Scene>
    </Router>
  );
};

const Styles = {
  viewTabStyle: {
    backgroundColor: '#ede6de',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#e4d9ce',
    borderBottomWidth: 0,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
}

export default RouterComponent;
