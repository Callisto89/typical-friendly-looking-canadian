import React from 'react';
import {
    Alert,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import {
    StandardText,
    HeaderText,
    Header2Text,
    ButtonText,
    StandardTextDark
} from './StyledText';
import Colors from '../constants/Colors';
import PlayerList from './PlayerList';
import UserService from '../utils/UserService';

export default class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        };
    }

    componentDidMount() {
        const { expanded } = this.props;
        this.setState({
            nick: UserService.getUserData().displayName,
            expanded,
        });
        this.forceUpdate();
    }

    timeFormatter = (timestamp) => {
        const date = new Date(timestamp);
        let timeString = '';
        const now = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        switch (true) {
        // Event is today
        case now.getDate() === date.getDate():
            timeString = `Today ${date.toTimeString().substring(0, 5)}`;
            break;
            // Event is tomorrow
        case tomorrow.getDate() === date.getDate():
            timeString = `Tomorrow ${date.toTimeString().substring(0, 5)}`;
            break;
        default:
            timeString = date.toString().substring(0, 21);
        }
        return timeString;
    }

    toggleEventView = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }

    editEvent = () => {
        Alert.alert('Snape kills Dumbledore');
    }

    render() {
        const selectStyle = (event, nick) => {
            if (event.players.includes(nick)) {
                return {
                    ...styles.eventContainer,
                    backgroundColor: Colors.colorPositiveOpacity
                };
            }
            return {
                ...styles.eventContainer,
                backgroundColor: Colors.colorPrimaryOpacity
            };
        };
        const toggleAddedToEvent = (event, nick) => {
            if (event.players.includes(nick)) {
                return (
                    <TouchableOpacity
                        onPress={this._onPressButton}
                        style={{
                            ...styles.signUpToggleButton,
                            backgroundColor: Colors.colorNegative
                        }}
                    >
                        <ButtonText>He bort mig</ButtonText>
                    </TouchableOpacity>
                );
            }
            return (
                <TouchableOpacity
                    onPress={this._onPressButton}
                    style={{
                        ...styles.signUpToggleButton,
                        backgroundColor: Colors.colorPositive
                    }}
                >
                    <ButtonText>Anmäl mig till event</ButtonText>
                </TouchableOpacity>
            );
        };
        const { expanded, nick } = this.state;
        const { event } = this.props;
        if (expanded) {
            return (
                <View>
                    <TouchableOpacity
                        onPress={this.toggleEventView}
                        style={selectStyle(event, nick)}
                    >
                        <View style={styles.eventInfoContainer}>
                            <HeaderText>{event.name}</HeaderText>
                            <StandardText>{this.timeFormatter(event.startDate)}</StandardText>
                            <StandardTextDark style={{ marginTop: 10, }}>
                                {event.players.length}
                                /
                                {event.maxPlayers}
                                {' players'}
                            </StandardTextDark>
                        </View>
                        <View style={styles.listHeaderContainer}>
                            <Header2Text>Signed up players</Header2Text>
                        </View>
                        <View style={styles.listContainer}>
                            {
                                event.players.map(player => (
                                    <PlayerList
                                        key={player}
                                        name={player}
                                    />
                                ))
                            }
                        </View>
                        <View style={styles.listHeaderContainer}>
                            <Header2Text>Waiting list</Header2Text>
                        </View>
                        <View style={styles.listContainer}>
                            {
                                event.waitingList.map(player => (
                                    <PlayerList
                                        key={player}
                                        name={player}
                                    />
                                ))
                            }
                        </View>
                        {toggleAddedToEvent(event, nick)}
                        <TouchableOpacity
                            onPress={this.editEvent}
                            style={styles.editEventButton}
                        >
                            <StandardText>Edit event</StandardText>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View>
                <TouchableOpacity
                    onPress={this.toggleEventView}
                    style={selectStyle(event, nick)}
                >
                    <View style={styles.eventInfoContainer}>
                        <HeaderText>{event.name}</HeaderText>
                        <StandardText>{this.timeFormatter(event.startDate)}</StandardText>
                        <StandardTextDark style={{ marginTop: 10, }}>
                            {event.players.length}
                            /
                            {event.maxPlayers}
                            {' players'}
                        </StandardTextDark>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    eventContainer: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 30,
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
