import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { CardSection, Card, Button } from '../common/card_produto';
import { Spinner } from '../common';
import { Container, Content, List, ListItem, InputGroup, Input } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  emailChangedCliente,
  nomeChanged,
  cepChanged,
  enderecoChanged,
  telefoneChanged,
  cancelarButton,
  atualizarInfo } from '../../actions';

class DadoItem extends Component {

  onNameChange(text){
    this.props.nomeChanged(text);
    // console.log(text);
  }
  onTelefoneChange(text){
    this.props.telefoneChanged(text);
    // console.log(text);
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

  cancelarButton(){
    this.props.cancelarButton();
  }

  atualizarButton(){
    // console.log(this.props.dadoItem.codigo_cliente);
    const { nome, cep, email, endereco, telefone } = this.props;
    const { codigo_cliente } = this.props.dadoItem;
    this.props.atualizarInfo(nome, cep, email, endereco, telefone, codigo_cliente);
  }

  renderRow(form){
    if(form == 'listar') return;
    if(form == 'update'){
      // console.log(this.props);
      if(this.props.loading == true) return <Spinner size='large'/>
      if(this.props.loading == false){
        return (
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Button onPress={this.atualizarButton.bind(this)}>
              Atualizar Dados
            </Button>
            <View style={{marginTop: 20}}>
              <Button onPress={this.cancelarButton.bind(this)}>
                Limpar Campos
              </Button>
            </View>

          </View>
        );
      }

    }
  }

  render(){
    // console.log(this.props);
    const { cep, endereco, nome_cliente, telefone, email, form, codigo_cliente} = this.props.dadoItem;
    // console.log(form);
    if(form == 'listar')  tipo = true;
    if(form == 'update')  tipo = false;

    return(
      <View>
        <ListItem>
          <InputGroup disabled = {tipo}>
            <Input inlineLabel label="Nome" placeholder={nome_cliente} value={this.props.nome} onChangeText={this.onNameChange.bind(this)}/>
          </InputGroup>
        </ListItem>
        <ListItem>
          <InputGroup disabled = {tipo}>
            <Input inlineLabel label="Endereço" placeholder={endereco} value={this.props.endereco} onChangeText={this.onEnderecoChange.bind(this)}/>
          </InputGroup>
        </ListItem>
        <ListItem>
          <InputGroup disabled = {tipo}>
            <Input inlineLabel label="CEP" placeholder={cep} value={this.props.cep} onChangeText={this.onCepChange.bind(this)}/>
          </InputGroup>
        </ListItem>
        <ListItem>
          <InputGroup disabled = {tipo}>
            <Input inlineLabel label="Telefone" placeholder={telefone} value={this.props.telefone} onChangeText={this.onTelefoneChange.bind(this)}/>
          </InputGroup>
        </ListItem>
        <ListItem>
          <InputGroup disabled = {tipo}>
            <Input inlineLabel label="Email" placeholder={email} value={this.props.email} onChangeText={this.onEmailChange.bind(this)}/>
          </InputGroup>
        </ListItem>
        <View>
          {this.renderRow(form)}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
          <Text style={{fontSize: 20, color: 'black'}}>{this.props.message}</Text>
        </View>
      </View>
    );
  }
};

const mapStateToProps = ({conta}) =>{
  const { nome, endereco, cep, telefone, email, message, loading } = conta;
  return { nome, endereco, cep, telefone, email, message, loading }
}

export default connect(mapStateToProps,
  {emailChangedCliente,
  nomeChanged,
  cepChanged,
  enderecoChanged,
  telefoneChanged,
  cancelarButton,
  atualizarInfo})(DadoItem);
