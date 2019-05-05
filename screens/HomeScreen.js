import React from 'react';

import { View } from 'react-native';
import * as firebase from 'firebase';

import LiveScreen from './LiveScreen';
import LoginScreen from './LoginScreen';

import UserService from '../utils/UserService';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyAwn6zMdAhCuA2aUb1QW07gsBNk5I1f5w4',
    authDomain: 'wardr-94a12.firebaseapp.com',
    databaseURL: 'https://wardr-94a12.firebaseio.com',
    projectId: 'wardr-94a12',
    storageBucket: 'wardr-94a12.appspot.com',
    messagingSenderId: '404390621281'
};
firebase.initializeApp(firebaseConfig);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      header: null,
  };

  constructor(props) {
      super(props);
      this.state = { user: null };
  }

  componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
          console.log('logged in status: ', user);
          this.setState({
              user: UserService.getUserData(user)
          });
      });
  }

  isLoggedIn() {
      const { user } = this.state;
      return user ? <LiveScreen /> : <LoginScreen />;
  }

  render() {
      return (
          <View>{this.isLoggedIn()}</View>
      );
  }
}
