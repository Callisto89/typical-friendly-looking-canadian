import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

const TabBarIcon = () => ({
    render() {
        const { focused, name } = this.props;
        return (
            <Text
                size={26}
                style={{
                    marginBottom: -3,
                    color: focused ? Colors.colorAccentDark : Colors.colorInactiveDark
                }}
            >
                {name}
            </Text>
        );
    }
});

export default TabBarIcon;
