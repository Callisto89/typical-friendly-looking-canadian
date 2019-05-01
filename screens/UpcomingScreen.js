import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

import { StandardText, HeaderText, Header2Text, ButtonText } from '../components/StyledText';
import BackgroundImage from '../components/Background';
import Colors from '../constants/Colors';
import { getUpcomingEvents } from '../utils/mockData';
import { NavigationEvents } from 'react-navigation';
import PlayerName from '../components/PlayerName';

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

  timeFormatter(date) {
    if (typeof (date) === 'number') {
      date = new Date(date)
    }
    let timeString = ''
    let now = new Date()
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

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
      <BackgroundImage>
        <ScrollView style={styles.container}>
          <View style={styles.eventContainer}>
            <NavigationEvents
              onWillFocus={() => updateData()}
            />
            {
              this.state.upcomingEvents.map((event, index) => <HeaderText key={index}>{event.name}</HeaderText>)
            }
            {
              this.state.upcomingEvents.map((event, index) => <StandardText key={index}>{this.timeFormatter(event.startDate)}, {event.players.length}/{event.maxPlayers} players</StandardText>)
            }
            <View style={styles.listContainer}>
              <Header2Text>Signed up players:</Header2Text>
              {
                this.state.upcomingEvents.map((event, index) => {
                  return event.players.map((player, index) => <PlayerName key={index} name={player} />)
                })
              }
            </View>
            <View style={styles.listContainer}>
              <Header2Text>{'Waiting list:'}</Header2Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.addMeButton}>
                  <ButtonText>Anmäl mig till event</ButtonText>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.compactEventContainer}>
            <NavigationEvents
              onWillFocus={() => updateData()}
            />
            {
              this.state.upcomingEvents.map((event, index) => <HeaderText key={index}>{event.name}</HeaderText>)
            }
            {
              this.state.upcomingEvents.map((event, index) => <StandardText key={index}>{this.timeFormatter(event.startDate)}, {event.players.length}/{event.maxPlayers} players</StandardText>)
            }
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
  eventContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 100,
    padding: 15,
    backgroundColor: Colors.opacityBoxColor,
  },
  listContainer: {
    marginTop: 30,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  compactEventContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
    padding: 15,
    backgroundColor: Colors.opacityBoxColor,
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
