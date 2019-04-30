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

import { StandardText, SmallText, ButtonText } from '../components/StyledText';
import BackgroundImage from '../components/Background';
import Colors from '../constants/Colors';

export default class LiveScreen extends React.Component {
  constructor(props) {
    super(props);
  };

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
            </View>
            <View style={styles.eventContainer}>
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
    backgroundColor: Colors.boxColor,
  },
  eventContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 100,
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.opacityBoxColor,
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
    backgroundColor: Colors.addMeButtonColor,
    padding: 10,
  },
});
