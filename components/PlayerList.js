import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

const PlayerList = ({ name }) => ({
    render() {
        return (
            <Text
                size={26}
                style={{ fontSize: 17, color: Colors.colorInactiveDark }}
            >
                {name}
            </Text>
        );
    }
});

export default PlayerList;
