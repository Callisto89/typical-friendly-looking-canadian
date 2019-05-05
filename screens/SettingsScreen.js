import React from 'react';
import { View } from 'react-native';

import ChangeNickname from '../components/ChangeNickname';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
      title: 'Settings. Callisto was here',
  };

  render() {
      /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
      return (
          <View><ChangeNickname /></View>
      );
  }
}
