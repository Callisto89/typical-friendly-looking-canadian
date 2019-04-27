import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  };
  
  static navigationOptions = {
    header: null,
  };

  render() {
      return (
        <View style={styles.contentContainer}>
            <Text style={styles.getStartedText}>You are not logged in!</Text>
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
