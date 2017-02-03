import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ButtonHome } from '../common';
import { connect } from 'react-redux';
import { signOff, clienteName } from '../../actions';
import { Actions } from 'react-native-router-flux';


class ContaScreen extends Component{

  componentWillMount(){
    this.props.clienteName();
  }

  deslogarCliente(){
    this.props.signOff();
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#f6f2ef'}}>
        <View style={{marginTop: 65, flex: 1}}>
          <View style={{marginTop: 40, flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#846848', opacity: 0.8}}> Olá {this.props.nome}, o que deseja? </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={Styles.containerMeusDadosStyle}>
                <ButtonHome color='#c9b49c' onPress={() => Actions.meusDados({type: 'reset'})}>
                  <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>Meus Dados</Text>
                </ButtonHome>
              </View>
            </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={Styles.containerAtualizarDadosStyle}>
                <ButtonHome color='#c9b49c' onPress={() => Actions.updateDados({type: 'reset'})}>
                  <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>Atualizar Dados</Text>
                  </ButtonHome>
              </View>
            </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={Styles.containerAtualizarDadosStyle}>
              <ButtonHome color='#c9b49c'>
                <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>Pagamento</Text>
                </ButtonHome>
            </View>
          </View>
          <View style={{ flex: 1.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <ButtonHome color='#c9b49c' onPress={() => this.deslogarCliente()}>
              <Text style={{fontSize: 15, textAlign:'center', color: 'white'}}>Sair</Text>
            </ButtonHome>
          </View>
        </View>
      </View>
    );
  }
}

const Styles ={
  containerMeusDadosStyle: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f6f2ef',
  },
  containerAtualizarDadosStyle: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f6f2ef',
  },
  containerBuyStyle: {
    padding: 20,
    backgroundColor: '#fbc02d',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#cccccc',
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
}

const mapStateToProps = ({ conta }) => {
  const { nome } = conta;
  return { nome };
}

export default connect(mapStateToProps, {signOff, clienteName})(ContaScreen);
