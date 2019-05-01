import React from 'react';
import { Text } from 'react-native';
import Colors from '../constants/Colors';

export class StandardText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'helvetica', fontSize: 18, color: Colors.colorLight, }]} />;
  }
}

export class HeaderText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'helvetica', fontSize: 22, color: Colors.colorLight, fontWeight: 'bold', }]} />;
  }
}

export class Header2Text extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'helvetica', fontSize: 20, color: Colors.colorLight, fontWeight: 'bold', }]} />;
  }
}

export class SmallText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'helvetica', fontSize: 10, color: 'tomato', }]} />;
  }
}

export class ButtonText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'helvetica', fontSize: 20, color: Colors.colorLight, }]} />;
  }
}
