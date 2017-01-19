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
    backgroundColor: "#d9d9d9",
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#d9d9d9',
    position: 'relative'
  }
};

export { CardSection };
