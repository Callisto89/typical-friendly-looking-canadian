import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import UserService from '../utils/UserService';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  handleSignup = (data) => {
    UserService.createAccount(data);
  }
  
  handleLogin = (data) => {
    UserService.login(data);
  }

  static navigationOptions = {
    header: null,
  };
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user =>
      this.setState({
        user: UserService.getUserData(user)
      })
    );
  }

  render() {
      return (
        <View style={styles.contentContainer}>
            <Text style={styles.getStartedText}>Can't log in?</Text>
            <Text style={styles.getStartedText}>You need to register!</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({nickname: text})}
              textContentType='nickname'
              placeholder='Nickname'
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({ email: text})}
              textContentType='emailAddress'
              placeholder='email'
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={true}
              textContentType='password'
              placeholder='password'
            />
            <Button onPress={() => this.handleSignup(this.state)} title='Submit'/>

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
