import React, {Component} from 'react';
import { Navigator } from 'react-native';

import HomePage from './HomePage.js';
import AboutPage from './AboutPage';
import TaskList from './TaskList';
import LoginPage from './Login.js';


export default class InitRouter extends Component {
  constructor() {
    super();
  }

  renderScene(route, navigator) {

    if (route.name === 'Home')
    {
      return (
        <HomePage
          navigator={navigator}
          {...route.passProps}
          title='Home' />
      );
    }

    if (route.name === 'About') {
      return (
        <AboutPage
          navigator={navigator}
          {...route.passProps}
          title='About' />
      );
    }

    if (route.name == 'Task') {
      return (
        <TaskList
          navigator={navigator}
          {...route.passProps}
          title='TaskList' />
      );
    }
    if (route.name == 'Login') {
      return (
        <LoginPage
          navigator={navigator}
          {...route.passProps}
          title='Login' />
      )
    }}



  render() {
    return (
      <Navigator initialRoute={{ name: 'Login', title: 'Login Page'} }
        renderScene={this.renderScene} />

    );
  }


}
