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

  timeFormatter(date) {
    if(typeof(date) === 'number') {
        date = new Date(date)
    }
    let timeString = ''
    let now = new Date()
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate()+ 1)

    switch (true) {
        // Om eventet är idag:
        case now.getDate() === date.getDate():
        timeString = 'Today ' + date.toTimeString().substring(0, 5)
        break;
         // Om eventet är imorgon:
         case tomorrow.getDate() === date.getDate():
         timeString = 'Tomorrow ' + date.toTimeString().substring(0, 5)
         break;
        default:
        timeString = date.toString().substring(0, 21)
      }
    return timeString
}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <NavigationEvents
          onWillFocus={() => updateData()}
        />
          {
            this.state.upcomingEvents.map((event, index) => <Text key={index}>{event.name}, {this.timeFormatter(event.startDate)}, {event.players}</Text>)
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
