import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection, Card } from '../common';

class VendaItem extends Component {
  render() {
    const { mensagem, cor } = this.props.listVendas;
    console.log('NAME ->'+mensagem);
      return(
        <Card>
          <CardSection>
            <Text>
              {mensagem}
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              {cor}
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              {mensagem}
            </Text>
          </CardSection>
        </Card>

    );
  }
}

export default VendaItem;
