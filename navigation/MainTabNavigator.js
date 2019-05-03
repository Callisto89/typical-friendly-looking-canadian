import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import UpcomingScreen from '../screens/UpcomingScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='Start'
    />
  ),
};

const UpcomingStack = createStackNavigator({
  Upcoming: UpcomingScreen,
});

UpcomingStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='Upcoming'
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='Settings'
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  UpcomingStack,
  SettingsStack,
},{
  tabBarOptions: {
    activeBackgroundColor: Colors.colorAccent,
    inactiveBackgroundColor: Colors.colorInactive,
    showLabel: false,
  },
});
