import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import { StandardText, BigText, Header2Text, ButtonText } from '../components/StyledText';
import BackgroundImage from '../components/Background';
import UserService from '../utils/UserService';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

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
    firebase.auth().onAuthStateChanged(user => this.setState({
      user: UserService.getUserData(user)
    }));
  }

  render() {
    return (
      <BackgroundImage>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <BigText>You need to sign in</BigText>
          </View>
          <View style={styles.headerContainer}>
            <Header2Text>Register an account:</Header2Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ nickname: text })}
              textContentType='nickname'
              placeholder='Nickname'
              placeholderTextColor={Colors.colorInactive}
              selectionColor={Colors.colorPrimary}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ email: text })}
              textContentType='emailAddress'
              placeholder='Email'
              placeholderTextColor={Colors.colorInactive}
              selectionColor={Colors.colorPrimary}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ password: text })}
              secureTextEntry={true}
              textContentType='password'
              placeholder='Password'
              placeholderTextColor={Colors.colorInactive}
              selectionColor={Colors.colorPrimary}
            />
          </View>
          <TouchableOpacity onPress={() => this.handleSignup(this.state)} style={{ ...styles.button, backgroundColor: Colors.colorPrimary}}>
            <ButtonText>Submit</ButtonText>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <StandardText>Already have an account?</StandardText>
            <TouchableOpacity onPress={() => this.handleSignup(this.state)} style={{ ...styles.button, backgroundColor: Colors.colorSecondary, marginTop: 10,}}>
              <ButtonText>Sign in</ButtonText>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 20,
    alignSelf: 'center',
    width: '95%',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  textInputContainer: {
    marginTop: 20,
  },
  textInput: {
    backgroundColor: Colors.colorLightOpacity,
    height: 40,
    borderColor: Colors.colorLight,
    borderWidth: 1,
    color: Colors.colorPrimary,
    marginBottom: 2,
  },
  button: {
    marginBottom: 15,
    marginTop: 30,
    width: 250,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
