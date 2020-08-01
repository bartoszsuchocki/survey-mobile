import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%"
    }
});

export default ({children}) => (
    <ImageBackground
        source={require('../assets/background.png')}
        style={styles.background}
    >
        {children}
    </ImageBackground>
)

