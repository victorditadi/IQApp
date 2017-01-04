const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#4e266b',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 100,
    backgroundColor: '#f5f5f5'
  },
  footer:{
    height: 110,
    backgroundColor: '#4e266b'
  },
  titulo:{
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    fontFamily: 'Verdana'
  }
})

module.exports = styles
module.exports.constants = constants;
