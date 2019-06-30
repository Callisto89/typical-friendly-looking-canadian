import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import { StandardText, BigText, } from '../components/StyledText';
import BackgroundImage from '../components/Background';
import Colors from '../constants/Colors';
import UserService from '../utils/UserService';
import getUpcomingEvents from '../utils/mockData';
import Event from '../components/Event';
import AddEvent from '../components/AddEvent';

export default class LiveScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    dataRequests = [];

    constructor(props) {
        super(props);
        this.state = {
            greeting: '',
            nick: '',
            nextEvent: {
                players: [],
                waitingList: []
            }
        };
    }

    componentDidMount() {
        console.log('componentdidmount, fetching');
        this.updateData();
        fetch('https://europe-west1-wardr-94a12.cloudfunctions.net/helloWorld')
            .then((res) => {
                this.setState({
                    greeting: res._bodyText,
                    nick: UserService.getUserData().displayName
                });
                this.forceUpdate();
            })
            .catch(() => 'ERROR');
    }

    componentWillUnmount() {
    }

    updateData = () => {
        getUpcomingEvents()
            .then((events) => {
                const nextEvent = events[0];
                this.setState({
                    nextEvent,
                });
            });
    };

    render() {
        const { greeting, nick, nextEvent } = this.state;
        const selectStyle = () => {
            if (nextEvent.players.includes(nick)) {
                return {
                    ...styles.headerContainer,
                    backgroundColor: Colors.colorPositive
                };
            }
            return {
                ...styles.headerContainer,
                backgroundColor: Colors.colorPrimary
            };
        };
        return (
            <BackgroundImage>
                <View style={styles.container}>
                    <ScrollView style={styles.container}>
                        <View style={styles.contentContainer}>
                            <StandardText key={greeting} style={{ alignSelf: 'center', }}>
                                {greeting}
                                {nick}
                            </StandardText>
                            <View style={styles.buttonContainer}><AddEvent /></View>
                            <View style={selectStyle()}>
                                <BigText>Next event</BigText>
                            </View>
                            <Event key={nextEvent.id} event={nextEvent} expanded />
                            <StandardText style={styles.textContainer}>
                                TRK Software Production
                            </StandardText>
                        </View>
                    </ScrollView>
                </View>
            </BackgroundImage>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 30,
        marginBottom: 100,
    },
    headerContainer: {
        width: '80%',
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
    },
    textContainer: {
        alignSelf: 'center',
        alignItems: 'center',
    },
});
