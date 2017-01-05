import React, { Component } from 'react';
import { Card, CardSection, Input, ButtonForm } from './common';

class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
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

export default LoginForm;
