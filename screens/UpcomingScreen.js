import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { getUpcomingEvents } from '../utils/mockData';

export default class UpcomingScreen extends React.Component {
  state = {
    upcomingEvents: [],
  };
  
  static navigationOptions = {
    title: 'Upcoming',
  };

  componentDidMount() {
    console.log('getting events');
    return getUpcomingEvents()
      .then(events => this.setState({
        upcomingEvents: events,
      }));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          {
            this.state.upcomingEvents.map((event, index) => <Text key={index}>{event.name}, {event.startDate}, {event.players}</Text>)
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
