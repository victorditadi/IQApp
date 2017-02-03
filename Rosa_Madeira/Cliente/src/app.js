import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
var Immutable = require('immutable');

class App extends Component {

    render() {
      StatusBar.setBarStyle('light-content', true);
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                  <Router />
                </View>
            </Provider>
        )
    }
};

export default App;
