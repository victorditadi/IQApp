import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Card, Button, CardSection } from '../common/card_produto';
import {
  cliente_form,
  emailChangedCliente,
  nomeChanged,
  dataNascimentoChanged,
  cepChanged,
  enderecoChanged,
  telefoneChanged } from '../../actions';

class GerarClienteForm extends Component {

  constructor(props){
    super(props);
  }

  gerarCodigo(){
    const { email, nome, endereco, data_nascimento, cep, telefone }  = this.props;

    this.props.cliente_form(email, nome, endereco, data_nascimento, cep, telefone);
  }

  onNameChange(text){
    this.props.nomeChanged(text);
    // console.log(text);
  }
  onTelefoneChange(text){
    this.props.telefoneChanged(text);
    // console.log(text);
  }
  onDataNascimentoChange(text){
    this.props.dataNascimentoChanged(text);
  }
  onCepChange(text){
    this.props.cepChanged(text);
  }
  onEnderecoChange(text){
    this.props.enderecoChanged(text);
  }
  onEmailChange(text){
    this.props.emailChangedCliente(text);
  }

  render(){
    // console.log(this.props);
    return(
      <View style={{flex: 1, backgroundColor: '#ede6de'}}>
        <View style={{flex: 0.4, marginTop: 80}}>

            <CardSection>
              <Input
                label="Nome"
                placeholder="Ana"
                value={this.props.nome}
                onChangeText={this.onNameChange.bind(this)}
                 />
            </CardSection>
            <View>
              <CardSection>
                <Input
                  label="Telefone"
                  placeholder="9999-9999"
                  value={this.props.telefone}
                  onChangeText={this.onTelefoneChange.bind(this)}
                   />
              </CardSection>
            </View>
            <View>
              <CardSection>
                <Input
                  label="CEP"
                  placeholder="2222-222"
                  value={this.props.cep}
                  onChangeText={this.onCepChange.bind(this)}
                   />
              </CardSection>
            </View>
            <View>
              <CardSection>
                <Input
                  label="Endereço"
                  placeholder="Rua 222 Numero 222 Bloco 2 Apt 202"
                  value={this.props.endereco}
                  onChangeText={this.onEnderecoChange.bind(this)}
                   />
              </CardSection>
            </View>
            <View>
              <CardSection>
                <Input
                  label="Email"
                  placeholder="ana@gmail.com"
                  value={this.props.email}
                  onChangeText={this.onEmailChange.bind(this)}
                   />
              </CardSection>
            </View>
          </View>

        <View style={{flex: 0.08, flexDirection: 'row', marginTop: 40}}>
          <Button onPress={() => this.gerarCodigo()}>Gerar Codigo</Button>
        </View>

        <View style={{flex: 0.3, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontSize: 40, color: 'green' }}>{this.props.codigo}</Text>
          <Text style={{fontSize: 20, color: 'red' }}>{this.props.error}</Text>
        </View>
      </View>
    );
  }
};

const mapStateToProps = ({ cliente_form }) => {
  const { email, nome, data_nascimento, cep, endereco, telefone, error, codigo } = cliente_form;
  // console.log(nome);
  return { email, nome, data_nascimento, cep, endereco, telefone, error, codigo };
};



export default connect(mapStateToProps, {
cliente_form,
emailChangedCliente,
nomeChanged,
dataNascimentoChanged,
cepChanged,
enderecoChanged,
telefoneChanged })(GerarClienteForm);
