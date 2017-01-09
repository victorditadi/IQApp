import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Icon, Button } from 'native-base';
import { Card, CardSection, ButtonForm } from './common';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class NotificacoesDetalhes extends Component{
  constructor(props) {
  super(props);
  this.state = {hide: 'false'};
}

fecharNotificacao(idNotificacao, cliente_id){

  axios.get('http://52.7.254.69/cliente/appMobile/notificacao.php?opcao=alterarstatus',{
    params: {
      status: 'sim',
      id:idNotificacao,
      cliente_id: cliente_id
    }
  })
  .then(response => console.log(response.data))
    .done(() => {
      this.setState({hide: 'true'});
    });
};

renderContent(){
  const {
        headerContentStyle,
        thumbnailStyle,
        thumbnailContentStyle,
        titleStyle,
        imageStyle,
        iconStyle,
        containerStyle } = styles;

  const { tipo, cor, visualizado, mensagem, data_criado, url, idNotificacao, cliente_id } = this.props.notificacao;

  if(this.state.hide == 'false'){
  return(
  <View style={{marginTop: 5}}>
    <Card>
    <View style={containerStyle}>
      <View style={thumbnailContentStyle}>
        <Icon name='ios-warning-outline' style={styles.iconStyle}/>
        {/* <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} /> */}
      </View>

      <View style={headerContentStyle}>
        <Text style={titleStyle}>Aviso</Text>
        <Text>{mensagem}</Text>
      </View>
    </View>

    <View style={containerStyle}>
      <Button style={{flex: 0.7, flexDirection: 'row', backgroundColor:'gray', marginRight: 5}} onPress={() => Linking.openURL(url)}>
        Confira
      </Button>
      <Button style={{flex: 0.1, flexDirection: 'row', backgroundColor:'#660000'}} onPress={() => this.fecharNotificacao(idNotificacao, cliente_id)}>
        X
      </Button>
    </View>
  </Card>
  </View>
)} else { return null };
}



  render() {
    return(
      <View>
        {this.renderContent()}
      </View>
    );
  }
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
  },
  titleStyle: {
    fontSize: 18,
    marginBottom: 5
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContentStyle:{
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  },
  iconStyle: {
    fontSize: 50,
    color: '#737373'
  },
  containerStyle:{
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "whitesmoke",
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'gray',
    position: 'relative'
  }
}

export default NotificacoesDetalhes;
