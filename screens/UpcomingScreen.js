import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import BackgroundImage from '../components/Background';
import getUpcomingEvents from '../utils/mockData';

import Event from '../components/Event';
import AddEvent from '../components/AddEvent';

export default class UpcomingScreen extends React.Component {
  static navigationOptions = {
      header: null,
  };

  state = {
      upcomingEvents: [],
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
              upcomingEvents: events,
          }));
  };

  render() {
      const { upcomingEvents } = this.state;
      return (
          <BackgroundImage>
              <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                  <NavigationEvents
                      onWillFocus={() => this.updateData()}
                  />
                  <View style={styles.addEventButtonContainer}><AddEvent /></View>
                  {
                      upcomingEvents.map(event => <Event key={event.id} data={event} />)
                  }
              </ScrollView>
          </BackgroundImage>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 100,
    },
    contentContainer: {
        paddingTop: 30,
    },
    addEventButtonContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 5,
    }
});
