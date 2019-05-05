import React from 'react';
import { View, Button } from 'react-native';

import UserService from '../utils/UserService';

export default class LogOut extends React.Component {
  handlePress = () => {
      UserService.logout();
  }

  render() {
      /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
      return (
          <View>
              <Button onPress={this.handlePress} title='Log out' />
          </View>
      );
  }
}
