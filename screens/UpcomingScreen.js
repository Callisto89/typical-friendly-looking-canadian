import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { StandardText } from '../components/StyledText';
import BackgroundImage from '../components/Background';
import getUpcomingEvents from '../utils/mockData';
import Event from '../components/Event';
import AddEvent from '../components/AddEvent';

export default class UpcomingScreen extends React.Component {
  static navigationOptions = {
      header: null,
  };

  constructor(props) {
      super(props);
      this.state = {
          upcomingEvents: []
      };
  }

  componentDidMount() {
      console.log('getting events');
      this.updateData();
  }

  updateData = () => {
      getUpcomingEvents()
          .then(events => this.setState({
              upcomingEvents: events.sort((a, b) => a.startDate - b.startDate),
          }));
  };

  render() {
      const { upcomingEvents } = this.state;
      return (
          <BackgroundImage>
              <ScrollView style={styles.container}>
                  <NavigationEvents
                      onWillFocus={() => this.updateData()}
                  />
                  <View style={styles.contentContainer}>
                      <View style={styles.buttonContainer}><AddEvent /></View>
                      {
                          upcomingEvents.map(event => <Event key={event.id} event={event} />)
                      }
                      <StandardText style={styles.textContainer}>
                            TRK Software Production
                      </StandardText>
                  </View>
              </ScrollView>
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
        marginBottom: 100,
    },
    buttonContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    textContainer: {
        alignSelf: 'center',
        alignItems: 'center',
    },
});
