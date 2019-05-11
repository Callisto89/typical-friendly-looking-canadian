/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    Platform,
    View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import * as firebase from 'firebase';

class AuthLoadingScreen extends React.Component {
    // continue if we're logged in, otherwise go to sign in
    componentDidMount() {
        const { navigation } = this.props;

        firebase.auth().onAuthStateChanged((user) => {
            navigation.navigate(user ? 'Main' : 'SignIn');
        });
    }

    // Render any loading content that you like here
    render() {
        return (
            <View>
                {Platform.OS === 'ios' && <StatusBar barStyle='default' hidden='false' />}
                <ActivityIndicator />
            </View>
        );
    }
}

export default withNavigation(AuthLoadingScreen);
