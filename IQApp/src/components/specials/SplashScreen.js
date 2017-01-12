import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class SplashScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }


  timer() {
    setTimeout(() => {
      this.setState({
        done: true
      });
    }, 3000);
  }

  componentDidMount() {
    this.timer();
  }

  render() {
    return (
      this.state.done ? ({ ...this.props.children })
      :
      (
        <Image source={require('../../assets/img/fundo_2.jpg')} style={styles.splashScreen} />
        // <Text style={styles.splashScreen}>
        //   <Text style={styles.texto}>
        //     Bem Vindo ao IQMail
        //   </Text>
        //
        //   </Text>
      )
    );
  }
}

const styles = {
 splashScreen: {
    resizeMode: 'contain'
 },
 texto: {
   color: 'white',
 }
};

export { SplashScreen };
