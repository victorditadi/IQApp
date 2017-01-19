import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { ButtonForm, Card, CardSection, Input, Spinner, ButtonHome } from '../common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

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

  renderContent(){
    if(this.props.loading) {
      return <Spinner size='large' />;
    }
      return(
        <ButtonHome color='#3D3C3C' onPress={this.onLoginPress.bind(this)}>
            Entrar
        </ButtonHome>
      );
  }

  render() {
    return(
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
            <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            </Card>
        </View>
        <View style={{flex: 0.4, flexDirection: 'row'}}>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    marginTop: 6,
    fontSize: 15,
    alignSelf: 'center',
    color: 'white'
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;

  return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser })(LoginForm);
