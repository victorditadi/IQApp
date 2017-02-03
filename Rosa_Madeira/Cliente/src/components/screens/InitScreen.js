import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import { ButtonHome, CardSection, Input, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { codeChanged, verifyLogin } from '../../actions';


class InitScreen extends Component {

  constructor(props){
    super(props);
    this.state = { statusLogin:'' };

    AsyncStorage.getItem("isLogin").then((response) => {
      this.setState({"statusLogin": response});
    }).done( () => {
      if(this.state.statusLogin === "true") Actions.main({type:'reset'});
    });
  }

  onPressButton(){
    this.props.verifyLogin(this.props.codigo);
  }

  codeChanged(text){
    this.props.codeChanged(text);
  }

  renderContent(){
    if(this.props.loading) {
      return <Spinner size='large' />;
    }
      return(
        <ButtonHome color='#3D3C3C' onPress={this.onPressButton.bind(this)}>
            Entrar
        </ButtonHome>
      );
  }

  render() {
    const { fundoLogo, fundoScreen, fundoButton } = styles;


    return (
      <View style = {{flex: 1, backgroundColor: '#d0bda8'}}>
          <View style = {fundoLogo}>
              <Text style={{color: 'white', fontSize: 40}}>Rosa Madeira</Text>
          </View>
          <View style = {fundoScreen}>
            <View>
              <Text style={{fontSize: 20, color: 'white', marginBottom: 20}}> Digite seu Código </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Input
                label="Codigo"
                placeholder="******"
                value={this.props.codigo}
                onChangeText={this.codeChanged.bind(this)}
                 />
            </View>
              <Text style={styles.errorTextStyle}>{this.props.error}</Text>
          </View>
          <View style = {fundoButton}>
            {this.renderContent()}
          </View>
      </View>
    );
  }
};

const styles = {
    fundoLogo: {
        flex: 0.01,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0bda8'
    },
    fundoScreen: {
        flex: 0.01,
        backgroundColor: '#d0bda8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundoButton: {
        flex: 0.0020,
        backgroundColor: '#d0bda8',
        flexDirection: 'row'
    },
    errorTextStyle: {
      marginTop: 6,
      fontSize: 15,
      alignSelf: 'center',
      color: '#4d0000',
      marginBottom: 80
    }
};

const mapStateToProps = ({ auth }) => {
  const { codigo, loading, error } = auth;
  return { codigo, loading, error};
}

export default connect(mapStateToProps, {codeChanged, verifyLogin})(InitScreen);
