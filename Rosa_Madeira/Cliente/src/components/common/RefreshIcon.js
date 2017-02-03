import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const RefreshIcon = () => {
    return (
        <TouchableOpacity>
            <Icon name='ios-mail' style={Styles.iconStyle}/>
        </TouchableOpacity>
    )
}

const Styles = {
  iconStyle: {
    fontSize: 130,
    color: '#737373'
  }
};
export { RefreshIcon } ;
