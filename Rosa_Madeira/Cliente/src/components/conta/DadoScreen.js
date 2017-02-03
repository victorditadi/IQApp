import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { ButtonHome } from '../common';
import { connect } from 'react-redux';
import { signOff, clienteInfo } from '../../actions';
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, InputGroup, Input } from 'native-base';
import DadoItem from './DadoItem';

class DadoScreen extends Component{

  componentWillMount(){
    // console.log('will mount');
    this.props.clienteInfo();
    // console.log(this.props);
    this.createDataSource(this.props)

  }

  componentWillReceiveProps(nextProps){
    // console.log(this.props);
    this.createDataSource(nextProps)
  }

  createDataSource({listInfoCliente}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listInfoCliente);
  }

  renderRow(listInfoCliente) {
    // console.log(listInfoCliente);
    return <DadoItem dadoItem={listInfoCliente} />
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#f6f2ef'}}>
        {/* <Text>Hello</Text> */}
        <Container style={{backgroundColor:'#f6f2ef'}}>
          <Content style={{marginTop: 80, marginRight: 20}}>
            <List>
              <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
              />
            </List>
          </Content>
        </Container>

      </View>
    );
  }
};

const Style = {
  blocoStyle: {
    flex: 0.3,
    backgroundColor:'#f6f2ef',

  }
};

const mapStateToProps = state => {
    const listInfoCliente = _.map(state.conta.clienteInfo, (key, value) => {
      return { ...key, form: 'listar'};
    });


    return { listInfoCliente };
};

export default connect(mapStateToProps, {clienteInfo})(DadoScreen);
