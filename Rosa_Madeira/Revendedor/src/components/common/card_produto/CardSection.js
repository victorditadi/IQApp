import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#b79b7b',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#947551',
    position: 'relative'
  }
};

export { CardSection };
