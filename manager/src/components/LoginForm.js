import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { ButtonForm, Card, CardSection, Input, Spinner, ButtonHome } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  constructor(props){
    super(props);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password }  = this.props;
    this.props.loginUser({email, password});
  }

  render() {
    return(
      <View style = {{flex: 1, backgroundColor: '#715696'}}>
        <View style = {styles.fundoLogo}>
            <Image source={require('../assets/img/logo-iqmail.png')} />
        </View>
        <View style={{flex: 3, justifyContent:'center'}}>
          <Card>
            <CardSection>
              <Input
                label="Email"
                placeholder="user@gmail.com"
                value={this.props.email}
                onChangeText={this.onEmailChange.bind(this)}
                 />
            </CardSection>
            <CardSection>
              <Input
                label="Senha"
                placeholder="****"
                secure
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
                 />
            </CardSection>
            <Text style={styles.errorTextStyle}></Text>
            </Card>
        </View>
        <View style={{flex: 0.4, flexDirection: 'row'}}>
          <ButtonHome color='#3D3C3C' onPress={this.onLoginPress.bind(this)}>
              Entrar
          </ButtonHome>
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    marginTop: 5,
    fontSize: 15,
    alignSelf: 'center',
    color: 'red'
  },
  fundoButton: {
      backgroundColor: '#3D3C3C',
      flexDirection: 'row',
  },
  cadastroText: {
    alignSelf: 'center',
    color: 'white'
  },
  fundoLogo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#715696'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser })(LoginForm);
