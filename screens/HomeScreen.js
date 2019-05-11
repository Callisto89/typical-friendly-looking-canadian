import React from 'react';

import LiveScreen from './LiveScreen';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <LiveScreen />
        );
    }
}
