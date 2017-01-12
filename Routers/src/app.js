import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './screens/ScarletScreen';
import GrayScreen from './screens/GrayScreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' : 'black', backgroundColor: 'whitesmoke'}}>{title}</Text>
  );
}


const App = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="osu" title='Home' icon={TabIcon}>
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
            />
          </Scene>
          <Scene key="dois" title="Notificações" icon={TabIcon}>
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>
          {/* Removed for brevity */}
        </Scene>
      </Scene>
    </Router>
  );
}

const Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
}

export default App;
