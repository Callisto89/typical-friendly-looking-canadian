import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { StandardText, BigText, HeaderText, } from '../components/StyledText';
import BackgroundImage from '../components/Background';
import Colors from '../constants/Colors';
import AddEvent from '../components/AddEvent';
//import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwn6zMdAhCuA2aUb1QW07gsBNk5I1f5w4",
  authDomain: "wardr-94a12.firebaseapp.com",
  databaseURL: "https://wardr-94a12.firebaseio.com",
  projectId: "wardr-94a12",
  storageBucket: "wardr-94a12.appspot.com",
  messagingSenderId: "404390621281"
};
//firebase.initializeApp(firebaseConfig);

export default class LiveScreen extends React.Component {

  state = {
    greeting: ''
  };

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    fetch('https://us-central1-wardr-94a12.cloudfunctions.net/helloWorld')
      .then((res) => {
        this.setState({
          greeting: res._bodyText
        });
      })
      .catch(() => 'ERROR');
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <StandardText style={{ alignSelf: 'center', }}>{this.state.greeting}</StandardText>
            <View style={styles.buttonContainer}><AddEvent /></View>
            <View style={styles.bigHeaderContainer}>
              <BigText>Next event</BigText>
            </View>
            <View style={styles.textBoxContainer}>
              <HeaderText style={styles.headerContainer}>Det här är en rubrik</HeaderText>
              <StandardText style={styles.textContainer}>{'Detta är en textruta. Det står text i den. Man kan skriva jättemycket text om man känner för det. \n\nPS. All makt åt Tengil.'}</StandardText>
            </View>
          </ScrollView>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
  bigHeaderContainer: {
    width: '80%',
    padding: 10,
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.colorPrimary,
  },
  textBoxContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 0,
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.colorPrimaryOpacity,
  },
  headerContainer: {
    alignSelf: 'center',
    padding: 10,
  },
  textContainer: {
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
