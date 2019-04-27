import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class UpcomingScreen extends React.Component {
  static navigationOptions = {
    title: 'Upcoming',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
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
