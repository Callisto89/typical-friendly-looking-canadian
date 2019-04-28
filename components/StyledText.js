import React from 'react';
import { Text } from 'react-native';

export class StandardText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'helvetica', fontSize: 17, color: 'tomato', }]} />;
  }
}

export class SmallText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'helvetica', fontSize: 10, color: 'tomato', }]} />;
  }
}

export class ButtonText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'helvetica', fontSize: 20, color: 'white', }]} />;
  }
}
