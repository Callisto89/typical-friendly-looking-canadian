import React from 'react';
import { View, TextInput, Button } from 'react-native';

import UserService from '../utils/UserService';

export default class ChangeNickname extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  handlePress = (state) => {
    UserService.updateNickname(state.nick);
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({nick: text})}
        textContentType='nickname'
        placeholder='Change nickname'
      />
        <Button onPress={() => this.handlePress(this.state)} title='Submit'/>
      </View>
    );
  }
}