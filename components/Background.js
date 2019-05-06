/* eslint-disable global-require */
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

const BackgroundImage = () => ({
    render() {
        const { children } = this.props;
        return (
            <ImageBackground
                source={require('../assets/images/backgroundimage.jpg')}
                style={styles.backgroundImage}
            >
                {children}
            </ImageBackground>
        );
    }
});

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundImage: {
        width: dimensions.width,
        height: dimensions.height
    },
});

export default BackgroundImage;
