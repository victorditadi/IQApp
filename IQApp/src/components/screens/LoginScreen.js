import React, { Component } from 'react';
import { Text, View, Linking, AsyncStorage, Image } from 'react-native';
import { ButtonForm, Card, CardSection, Input, Spinner, ButtonHome } from '../common';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';


class LoginScreen extends Component {

  state = { email: '', password: '', error: '', loading: false, user: '' } ;

  onButtonPress() {
    const { email, password, loggedIn } = this.state;

    this.setState({ error: '', loading: true });

    axios.get('http://52.7.254.69/cliente/appMobile/index.php', {
      params: {
        login: email,
        password: password
        }
      })
        .then(response => this.onLoginSucess(response.data));
  }

  onLoginSucess(resposta) {
    // console.log(resposta);

    // A FAZER ERROR LOGIN
      if(resposta[0] == "LoginError"){
        console.log(resposta[0]);
        this.setState({
          email: '',
          password: '',
          loading: false,
          error: 'Usuário ou Senha incorretos',
        });
      }

    else
    {
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: '',
      });

    AsyncStorage.setItem("isLogin", true.toString());
    AsyncStorage.setItem("cliente_hash", resposta.password);
    AsyncStorage.setItem("cliente_id", resposta.cliente_id);
    AsyncStorage.setItem("cliente_nome", resposta.nome);

    Actions.main();




  }
}

  onLoginFail() {
    this.setState({ error: 'Erro ao logar', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    return (
      <ButtonHome color='#3D3C3C' onPress={this.onButtonPress.bind(this)}>
          Entrar
      </ButtonHome>
    );
  }

    render() {
      return (
        <View style = {{flex: 1, backgroundColor: '#715696'}}>
          <View style = {styles.fundoLogo}>
              <Image source={require('../../assets/img/logo-iqmail.png')} />
          </View>
          <View style={{flex: 3, justifyContent:'center'}}>
            <Card>
              <CardSection>
                <Input
                  label="Email"
                  placeholder="user@gmail.com"
                  value={this.state.email}
                  onChangeText={email => this.setState({email})}
                   />
              </CardSection>
              <CardSection>
                <Input
                  label="Senha"
                  placeholder="****"
                  secure
                  value={this.state.password}
                  onChangeText={password => this.setState({password})}
                   />
              </CardSection>
              <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            </Card>
          </View>

          <View style={{flex: 0.4, flexDirection: 'row'}}>
            {this.renderButton()}
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

export { LoginScreen };
