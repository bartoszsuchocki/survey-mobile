import React from 'react';
import { STextInput } from './common/Inputs';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styleConsts, { commonStyles } from '../utils/styleConsts';
import labels from '../utils/labels';
import Background from './Background';
import { HOME_SCREEN, REGISTRATION_SCREEN } from './Navigation';

export default ({navigation}) => {
    
    const login = () => {
        navigation.navigate(HOME_SCREEN.route);
    }

    const goToRegistrationScreen = () => {
        navigation.navigate(REGISTRATION_SCREEN.route);
    }
    
    return (
        <Background>
            <View style={styles.loginPanel}>
                <Text style={styles.title}>
                    {labels.WELCOME_MESSAGE}
                </Text>
                <STextInput
                    style={styles.input}
                    label={labels.MAIL}
                />

                <STextInput
                    style={styles.input}
                    label={labels.PASSWORD}
                />
                
                <TouchableOpacity 
                    onPress={login}
                    style={[commonStyles.button, styles.loginButton]}
                >
                    <Text style={[commonStyles.buttonText]}>
                        {labels.LOG_IN}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={goToRegistrationScreen}
                    style={styles.registrationLinkContainer}    
                >
                    <Text style={styles.registrationLink}>
                        {labels.CREATE_ACCOUNT}
                    </Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 15
    },

    loginButton: {
        alignSelf: 'center',
        backgroundColor: styleConsts.SECONDARY_COLOR,
        borderColor: styleConsts.SECONDARY_COLOR,
        height: 50
    },

    loginPanel: {
        backgroundColor: styleConsts.TILE_BACKGROUND_COLOR,
        marginVertical: 30,
        marginHorizontal: 20,
        paddingHorizontal: 30,
        paddingVertical: 30,
        borderRadius: 5,
        opacity: 0.7
    },

    registrationLink: {
        fontSize: 16,
        color: '#91CBF1',
    },

    registrationLinkContainer: {
        alignSelf: 'flex-end',
        marginTop: 30
    },

    title: {
        alignSelf: 'center',
        color: styleConsts.SECONDARY_COLOR,
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 21,
        textAlign: "center",
        padding: 10
    }
})