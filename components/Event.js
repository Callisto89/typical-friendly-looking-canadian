import React from 'react';
import { Alert, StyleSheet, View, TouchableOpacity, } from 'react-native';

import { StandardText, HeaderText, Header2Text, ButtonText, StandardTextDark, } from '../components/StyledText';
import Colors from '../constants/Colors';
import PlayerList from '../components/PlayerList';

export default class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        };
    };

    toggleEventView() {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    editEvent() {
        Alert.alert('Snape kills Dumbledore');
    };

    timeFormatter(date) {
        if (typeof (date) === 'number') {
            date = new Date(date)
        }
        let timeString = ''
        let now = new Date()
        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)

        switch (true) {
            // Om eventet är idag:
            case now.getDate() === date.getDate():
                timeString = 'Today ' + date.toTimeString().substring(0, 5)
                break;
            // Om eventet är imorgon:
            case tomorrow.getDate() === date.getDate():
                timeString = 'Tomorrow ' + date.toTimeString().substring(0, 5)
                break;
            default:
                timeString = date.toString().substring(0, 21)
        }
        return timeString
    }

    render() {
        if (this.state.expanded) {
            return (
                <View>
                    <TouchableOpacity onPress={this.toggleEventView.bind(this)} style={styles.eventContainer}>
                        <View style={styles.eventInfoContainer}>
                            <HeaderText>{this.props.data.name}</HeaderText>
                            <StandardText>{this.timeFormatter(this.props.data.startDate)}</StandardText>
                            <StandardTextDark style={{ marginTop: 10, }}>{this.props.data.players.length}/{this.props.data.maxPlayers} players</StandardTextDark>
                        </View>
                        <View style={styles.listHeaderContainer}>
                            <Header2Text>Signed up players</Header2Text>
                        </View>
                        <View style={styles.listContainer}>
                            {
                                this.props.data.players.map((player, index) => <PlayerList key={index} name={player} />)
                            }
                        </View>
                        <View style={styles.listHeaderContainer}>
                            <Header2Text>Waiting list</Header2Text>
                        </View>
                        <View style={styles.listContainer}>
                            {
                                this.props.data.waitingList.map((player, index) => <PlayerList key={index} name={player} />)
                            }
                        </View>
                        <TouchableOpacity onPress={this._onPressButton} style={{ ...styles.signUpToggleButton, backgroundColor: Colors.colorPositive}}>
                            <ButtonText>Anmäl mig till event</ButtonText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onPressButton} style={{ ...styles.signUpToggleButton, backgroundColor: Colors.colorNegative}}>
                            <ButtonText>He bort mig</ButtonText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.editEvent} style={styles.editEventButton}>
                            <StandardText>Edit event</StandardText>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View>
                    <TouchableOpacity onPress={this.toggleEventView.bind(this)} style={styles.compactEventContainer}>
                        <View style={styles.eventInfoContainer}>
                            <HeaderText>{this.props.data.name}</HeaderText>
                            <StandardText>{this.timeFormatter(this.props.data.startDate)}</StandardText>
                            <StandardTextDark style={{ marginTop: 10, }}>{this.props.data.players.length}/{this.props.data.maxPlayers} players</StandardTextDark>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        };
    }
}

const styles = StyleSheet.create({
    compactEventContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        padding: 10,
        backgroundColor: Colors.colorPrimaryOpacity,
    },
    eventContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        padding: 10,
        backgroundColor: Colors.colorPrimaryOpacity,
    },
    eventInfoContainer: {
        marginLeft: 10,
    },
    listHeaderContainer: {
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
    },
    listContainer: {
        marginTop: 10,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    signUpToggleButton: {
        marginBottom: 15,
        marginTop: 30,
        width: 250,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
    },
    editEventButton: {
        marginTop: 20,
        width: 125,
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.colorPositive,
        padding: 5,
    },
});
