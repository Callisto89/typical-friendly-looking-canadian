import React from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
import * as firebase from 'firebase';
import AppNavigator from './navigation/AppNavigator';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyAwn6zMdAhCuA2aUb1QW07gsBNk5I1f5w4',
    authDomain: 'wardr-94a12.firebaseapp.com',
    databaseURL: 'https://wardr-94a12.firebaseio.com',
    projectId: 'wardr-94a12',
    storageBucket: 'wardr-94a12.appspot.com',
    messagingSenderId: '404390621281'
};
firebase.initializeApp(firebaseConfig);

const App = () => ({
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle='default' hidden='false' />}
                <AppNavigator />
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
