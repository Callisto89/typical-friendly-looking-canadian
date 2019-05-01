import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { StandardText, HeaderText, SmallText, ButtonText } from '../components/StyledText';
import BackgroundImage from '../components/Background';
import Colors from '../constants/Colors';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwn6zMdAhCuA2aUb1QW07gsBNk5I1f5w4",
  authDomain: "wardr-94a12.firebaseapp.com",
  databaseURL: "https://wardr-94a12.firebaseio.com",
  projectId: "wardr-94a12",
  storageBucket: "wardr-94a12.appspot.com",
  messagingSenderId: "404390621281"
};
firebase.initializeApp(firebaseConfig);

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
      });
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <View style={styles.getStartedContainer}>
              <SmallText>Det här är SmallText. So smoooool.</SmallText>

              <StandardText>Det här är StandardText</StandardText>

              <ButtonText>Det här är ButtonText</ButtonText>
              <StandardText>{this.state.greeting}</StandardText>
            </View>
            <View style={styles.eventContainer}>
            <View style={styles.headerContainer}>
                <HeaderText>{'Detta är en rubrik'}</HeaderText>
              </View>
              <View style={styles.textContainer}>
                <StandardText>{'Detta är en textruta. Det står text i den. Man kan skriva jättemycket text om man känner för det. \n\nPS. All makt åt Tengil.'}</StandardText>
              </View>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.addMeButton}>
                  <ButtonText>Anmäl mig till event</ButtonText>
                </View>
              </TouchableOpacity>
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
  textContainer: {
    padding: 10,
  },
  headingContainer: {
    padding: 10,
  },
  eventContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 100,
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.colorPrimaryOpacity,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  addMeButton: {
    marginBottom: 15,
    marginTop: 30,
    width: 250,
    alignItems: 'center',
    backgroundColor: Colors.colorPositive,
    padding: 10,
  },
});
