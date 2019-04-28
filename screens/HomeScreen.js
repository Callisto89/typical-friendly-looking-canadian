import React from 'react';

import LiveScreen from './LiveScreen';
import LoginScreen from './LoginScreen';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  };
  
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      this.state.isLoggedIn ? <LiveScreen/> : <LoginScreen/>
    );
  }
}
