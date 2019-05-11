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
import UserService from '../utils/UserService';

export default class LiveScreen extends React.Component {
  static navigationOptions = {
      header: null,
  };

  dataRequests = [];

  constructor(props) {
      super(props);
      this.state = {
          greeting: '',
          nick: ''
      };
  }

  componentDidMount() {
      console.log('componentdidmount, fetching');
      fetch('https://europe-west1-wardr-94a12.cloudfunctions.net/helloWorld')
          .then((res) => {
              this.setState({
                  greeting: res._bodyText,
                  nick: UserService.getUserData().displayName
              });
              this.forceUpdate();
          })
          .catch(() => 'ERROR');
  }

  componentWillUnmount() {
  }

  render() {
      const { greeting, nick } = this.state;
      return (
          <BackgroundImage>
              <View style={styles.container}>
                  <ScrollView
                      style={styles.container}
                      contentContainerStyle={styles.contentContainer}
                  >
                      <StandardText key={greeting} style={{ alignSelf: 'center', }}>
                          { greeting }
                          { nick }
                      </StandardText>
                      <View style={styles.buttonContainer}><AddEvent /></View>
                      <View style={styles.bigHeaderContainer}>
                          <BigText>Next event</BigText>
                      </View>
                      <View style={styles.textBoxContainer}>
                          <HeaderText style={styles.headerContainer}>
                              Det här är en rubrik
                          </HeaderText>
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
