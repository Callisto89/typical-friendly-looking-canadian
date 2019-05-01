import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

import { StandardText, HeaderText, Header2Text, ButtonText } from '../components/StyledText';
import BackgroundImage from '../components/Background';
import Colors from '../constants/Colors';
import { getUpcomingEvents } from '../utils/mockData';
import { NavigationEvents } from 'react-navigation';
import PlayerName from '../components/PlayerName';
import Event from '../components/Event';

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
    header: null,
  };

  componentDidMount() {
    console.log('getting events');
    updateData();
  };

  render() {
    return (
      <BackgroundImage>
        <ScrollView style={styles.container}>
            <NavigationEvents
              onWillFocus={() => updateData()}
            />
            {
              this.state.upcomingEvents.map((event, index) => <Event key={index} data={event}/>)
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
});
