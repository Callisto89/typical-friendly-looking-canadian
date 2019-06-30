import React from 'react';
import {
    View,
    Text,
    Picker,
    Button,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import Colors from '../constants/Colors';
import availableGames from '../utils/availableGames';

// special case since we have .ios and .android versions of this component
// eslint-disable-next-line import/no-unresolved
import DatePicker from '../components/DatePicker';

class AddEventScreen extends React.Component {
    static navigationOptions = {
        title: 'Add event',
    };

    constructor(props) {
        super(props);
        console.log('availableGames = ', availableGames);
        this.state = {
            games: availableGames.games,
            defaultGame: availableGames.games.csgo,
            selectedGame: null,
        };
    }

    render() {
        const { games, defaultGame, selectedGame } = this.state;
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3, justifyContent: 'space-between' }}>
                    <Picker
                        selectedValue={defaultGame}
                        style={{ height: 60, width: 200 }}
                        onValueChange={(itemValue) => {
                            this.setState({ selectedGame: itemValue });
                        }}
                    >
                        <Picker.Item
                            label='Choose a game'
                            color={Colors.colorPrimary}
                            value={null}
                            key='default'
                        />
                        {
                            games.map(game => (
                                <Picker.Item
                                    label={game.longName}
                                    value={game}
                                    key={game.longName}
                                />
                            ))
                        }
                    </Picker>
                    <DatePicker><Text>Select date</Text></DatePicker>
                    <Text>{ selectedGame ? selectedGame.longName : null }</Text>
                </View>
                <View style={{ flex: 10 }} />
                <Button title='Dismiss' onPress={() => navigation.popToTop()} />
            </View>
        );
    }
}

export default withNavigation(AddEventScreen);
