import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, } from 'react-native';

import { ButtonText } from '../components/StyledText';
import Colors from '../constants/Colors';

export default class AddEventButton extends React.Component {
    
    createEvent() {
        Alert.alert('Boop the snoot!')
      }
    
    render() {
        return (
            <TouchableOpacity onPress={this.createEvent} style={styles.addEventButton}>
                <ButtonText>Create new event</ButtonText>
                
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    compactEventContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor: Colors.colorPrimaryOpacity,
    },
    eventContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 50,
        padding: 15,
        backgroundColor: Colors.colorPrimaryOpacity,
    },
    listHeaderContainer: {
        marginTop: 30,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    listContainer: {
        marginTop: 10,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    addEventButton: {
        marginBottom: 15,
        marginTop: 10,
        width: 250,
        alignItems: 'center',
        backgroundColor: Colors.colorPositive,
        padding: 10,
    },
});