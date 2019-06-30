import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    DatePickerAndroid,
    TimePickerAndroid,
    Text,
    View,
} from 'react-native';
import Colors from '../constants/Colors';

export default class DatePicker extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedDate: null,
        };
    }

    pickDate = async () => {
        let selectedDate = null;

        try {
            const {
                action,
                year,
                month,
                day,
            } = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                selectedDate = { year, month, day };
                this.setState({
                    selectedDate
                });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
        return selectedDate;
    }

    pickTime = async () => {
        let selectedTime;
        try {
            const now = new Date();
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: now.getHours(),
                minute: now.getMinutes(),
                is24Hour: true,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                selectedTime = { hour, minute };
                this.setState({
                    selectedTime
                });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open time picker', message);
        }
    }

    displayTimeAndDate = () => {
        const { selectedDate, selectedTime } = this.state;
        if (!selectedDate || !selectedTime) {
            return '';
        }
        const { year, month, day } = selectedDate;
        const { hour, minute } = selectedTime;

        return new Date(year, month, day, hour, minute).toString();
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.pickDate} style={styles.addEventButton}>
                    <Text>Select date</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.pickTime} style={styles.addEventButton}>
                    <Text>Select time</Text>
                </TouchableOpacity>
                <Text>{ this.displayTimeAndDate() }</Text>
            </View>
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
