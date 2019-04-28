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
              <SmallText>Det här är SmallText</SmallText>

              <StandardText>Det här är StandardText</StandardText>

              <ButtonText>Det här är ButtonText</ButtonText>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                  <ButtonText>Det här är en knapp</ButtonText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                  <ButtonText>Det här är en till knapp</ButtonText>
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
  buttonContainer: {
    width: '100%',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  button: {
    marginBottom: 30,
    width: 250,
    alignItems: 'center',
    backgroundColor: Colors.buttonColor,
    padding: 10,
  },
});
