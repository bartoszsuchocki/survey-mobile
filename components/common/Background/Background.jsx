import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './Background.style.js';

export default ({children}) => (
    <ImageBackground
        source={require('../../../assets/background.png')}
        style={styles.background}
    >
        {children}
    </ImageBackground>
);
