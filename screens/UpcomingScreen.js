import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { getUpcomingEvents } from '../utils/mockData';
import { NavigationEvents } from 'react-navigation';

export default class UpcomingScreen extends React.Component {
  state = {
    upcomingEvents: [],
  };

  constructor(props) {
    super(props);

    updateData = () => {
      getUpcomingEvents()
        .then(events => this.setState({
          upcomingEvents: events,
        }));
    };
  }

  static navigationOptions = {
    title: 'Upcoming',
  };

  componentDidMount() {
    console.log('getting events');
    updateData();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <NavigationEvents
          onWillFocus={() => updateData()}
        />
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
