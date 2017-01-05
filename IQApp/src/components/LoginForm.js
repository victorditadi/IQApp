import React, { Component } from 'react';
import { Text, View, Dimensions, Linking, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { ButtonForm, Card, CardSection, Input, Spinner, ButtonHome } from './common';
import axios from 'axios';

var height = Dimensions.get('window').height;

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false, user: '' } ;

  onButtonPress() {
    const { email, password, loggedIn } = this.state;

    this.setState({ error: '', loading: true });

    axios.get('http://52.90.199.18/login', {
      params: {
        login: email,
        pass: password
        }
      })
        .then(response => this.onLoginSucess(response.data));


    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(this.onLoginSucess.bind(this))
    //   .catch(() => {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(this.onLoginSucess.bind(this))
    //       .catch(this.onLoginFail.bind(this));
    //   });
  }

  onLoginSucess(resposta) {
    if(resposta == 'OK')
    {
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: '',
    });
    AsyncStorage.setItem("isLogin", yes);

  }
}

  onLoginFail() {
    this.setState({ error: 'Erro ao criar a conta', loading: false });
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
        <View>
          <View style={{marginBottom: height * 0.25}}>
            <Card>
              <CardSection>
                <Input
                    label="Email"
                    placeholder="user@gmail.com"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
              </CardSection>

              <CardSection>
                <Input
                    label="Senha"
                    placeholder="****"
                    value={this.state.password}
                    secure={true}
                    onChangeText={password => this.setState({ password })}
                />
              </CardSection>

              <Text style={styles.errorTextStyle}>
                {this.state.error}
              </Text>

              <Text onPress={() => Linking.openURL('http://www.iqmail.com.br/landings/relacionamento/')} style={styles.cadastroText}>
                Clique aqui para criar um cadastro.
              </Text>
          </Card>

        </View>
        <View style = {styles.fundoButton}>
          {this.renderButton()}
        </View>
        </View>
      );
    }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
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
  }
};

export default LoginForm;
