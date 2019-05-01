import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

export default class PlayerName extends React.Component {
  render() {
    return (
      <Text
        size={26}
        style={{ fontSize: 17, color: Colors.playerListTextColor }}
      >{this.props.name}</Text>
    );
  }
}