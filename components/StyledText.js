import React from 'react';
import { Text } from 'react-native';
import Colors from '../constants/Colors';

const StandardText = props => ({
    render() {
        const { style } = props;
        return (
            <Text
                {...props}
                style={[
                    style,
                    {
                        fontFamily: 'helvetica',
                        fontSize: 18,
                        color: Colors.colorLight
                    }
                ]}
            />
        );
    }
});

const StandardTextDark = props => ({
    render() {
        const { style } = props;
        return (
            <Text
                {...props}
                style={[
                    style,
                    {
                        fontFamily: 'helvetica',
                        fontSize: 18,
                        color: Colors.colorInactiveDark
                    }
                ]}
            />
        );
    }
});

const BigText = props => ({
    render() {
        const { style } = props;
        return (
            <Text
                {...props}
                style={[
                    style,
                    {
                        fontFamily: 'helvetica',
                        fontSize: 26,
                        color: Colors.colorLight,
                        fontWeight: 'bold'
                    }
                ]}
            />
        );
    }
});

const HeaderText = props => ({
    render() {
        const { style } = props;
        return (
            <Text
                {...props}
                style={[
                    style,
                    {
                        fontFamily: 'helvetica',
                        fontSize: 22,
                        color: Colors.colorLight,
                        fontWeight: 'bold'
                    }
                ]}
            />
        );
    }
});

const Header2Text = props => ({
    render() {
        const { style } = props;
        return (
            <Text
                {...props}
                style={[
                    style,
                    {
                        fontFamily: 'helvetica',
                        fontSize: 20,
                        color: Colors.colorLight,
                        fontWeight: 'bold'
                    }
                ]}
            />
        );
    }
});

const ButtonText = props => ({
    render() {
        const { style } = props;
        return (
            <Text
                {...props}
                style={[
                    style,
                    {
                        fontFamily: 'helvetica',
                        fontSize: 20,
                        color: Colors.colorLight
                    }
                ]}
            />
        );
    }
});

export {
    StandardText,
    StandardTextDark,
    BigText,
    HeaderText,
    Header2Text,
    ButtonText
};
