import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

export default class PlayerList extends React.Component {
  render() {
    return (
      <Text
        size={26}
        style={{ fontSize: 17, color: Colors.colorInactiveDark }}
      >{this.props.name}</Text>
    );
  }
}