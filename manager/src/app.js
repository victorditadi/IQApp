import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDVXJ4ZE_xFzGoKM60G0VXr78tMfUrlTmA",
            authDomain: "manager-react.firebaseapp.com",
            databaseURL: "https://manager-react.firebaseio.com",
            storageBucket: "manager-react.appspot.com",
            messagingSenderId: "243841434453"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm/>
                </View>
            </Provider>
        )
    }
};

export default App;
