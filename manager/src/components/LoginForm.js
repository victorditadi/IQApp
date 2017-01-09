import React, { Component } from 'react';
import { Card, CardSection, Input, ButtonForm } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return(
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secure
            label="Senha"
            placeholder="****"
          />
        </CardSection>

        <CardSection>
          <ButtonForm>
            Entrar
          </ButtonForm>
        </CardSection>

      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
