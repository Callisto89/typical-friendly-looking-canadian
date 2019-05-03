import React from 'react';
import { StyleSheet, View, TouchableOpacity, } from 'react-native';

import { StandardText, HeaderText, Header2Text, ButtonText, StandardTextDark, } from '../components/StyledText';
import Colors from '../constants/Colors';
import PlayerName from '../components/PlayerName';

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
                        <HeaderText>{this.props.data.name}</HeaderText>
                        <StandardText>{this.timeFormatter(this.props.data.startDate)}</StandardText>
                        <StandardTextDark style={{ marginTop: 10, }}>{this.props.data.players.length}/{this.props.data.maxPlayers} players</StandardTextDark>
                        <View style={styles.listHeaderContainer}>
                            <Header2Text>Signed up players</Header2Text>
                        </View>
                        <View style={styles.listContainer}>
                            {
                                this.props.data.players.map((player, index) => <PlayerName key={index} name={player} />)
                            }
                        </View>
                        <View style={styles.listHeaderContainer}>
                            <Header2Text>Waiting list</Header2Text>
                        </View>
                        <View style={styles.listContainer}>
                            {
                                this.props.data.waitingList.map((player, index) => <PlayerName key={index} name={player} />)
                            }
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={this._onPressButton}>
                                <View style={styles.addMeButton}>
                                    <ButtonText>Anmäl mig till event</ButtonText>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View>
                    <TouchableOpacity onPress={this.toggleEventView.bind(this)} style={styles.compactEventContainer}>
                        <HeaderText>{this.props.data.name}</HeaderText>
                        <StandardText>{this.timeFormatter(this.props.data.startDate)}</StandardText>
                        <StandardTextDark style={{ marginTop: 10, }}>{this.props.data.players.length}/{this.props.data.maxPlayers} players</StandardTextDark>
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
        padding: 15,
        backgroundColor: Colors.colorPrimaryOpacity,
    },
    eventContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
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
    addMeButton: {
        marginBottom: 15,
        marginTop: 10,
        width: 250,
        alignItems: 'center',
        backgroundColor: Colors.colorPositive,
        padding: 10,
    },
});