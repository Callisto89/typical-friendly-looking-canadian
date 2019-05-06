import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, } from 'react-native';

import { ButtonText } from './StyledText';
import Colors from '../constants/Colors';

export default class AddEventButton extends React.Component {
    createEvent = () => {
        Alert.alert('Boop the snoot!');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.createEvent} style={styles.addEventButton}>
                <ButtonText>Create new event</ButtonText>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    addEventButton: {
        marginBottom: 15,
        marginTop: 10,
        width: 250,
        alignItems: 'center',
        backgroundColor: Colors.colorPositive,
        padding: 10,
    },
});
