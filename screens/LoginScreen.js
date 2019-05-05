import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import { HeaderText, ButtonText } from '../components/StyledText';
import BackgroundImage from '../components/Background';
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
      <BackgroundImage>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <HeaderText>Can't log in?</HeaderText>
            <HeaderText>You need to register!</HeaderText>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ nickname: text })}
              textContentType='nickname'
              placeholder='Nickname'
              selectionColor={Colors.colorPrimary}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ email: text })}
              textContentType='emailAddress'
              placeholder='Email'
              selectionColor={Colors.colorPrimary}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ password: text })}
              secureTextEntry={true}
              textContentType='password'
              placeholder='Password'
              selectionColor={Colors.colorPrimary}
            />
          </View>
          <TouchableOpacity onPress={() => this.handleSignup(this.state)} style={styles.submitButton}>
            <ButtonText>Submit</ButtonText>
          </TouchableOpacity>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 30,
    alignSelf: 'center',
    width: '95%',
  },
  headerContainer: {
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: 20,
  },
  textInput: {
    backgroundColor: Colors.colorLightOpacity,
    height: 40,
    borderColor: Colors.colorLight,
    borderWidth: 1,
  },
  submitButton: {
    marginBottom: 15,
    marginTop: 30,
    width: 250,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.colorPrimary,
  },
});
