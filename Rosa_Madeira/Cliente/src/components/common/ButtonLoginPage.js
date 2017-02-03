import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'native-base';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const ButtonHome = ({ onPress, children, color}) => {
  const styles = {
    buttonStyle: {
      flex: 1,
      height: height * 0.092,
      backgroundColor: color,
      borderRadius: 0
    }
  };

  const { buttonStyle } = styles;

  return (
    <Button onPress={onPress} style={buttonStyle}>
        {children}
    </Button>
  );
};


export { ButtonHome };
