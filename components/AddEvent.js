import React from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ButtonText } from './StyledText';
import Colors from '../constants/Colors';

class AddEventButton extends React.Component {
    createEvent = () => {
        const { navigation } = this.props;
        navigation.push('AddEvent');
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

export default withNavigation(AddEventButton);
