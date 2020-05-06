import React from 'react';
import { STextInput } from './common/Inputs';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styleConsts, { commonStyles } from '../utils/styleConsts';
import labels from '../utils/labels';
import Background from './Background';
import { LOGIN_SCREEN } from './Navigation';

export default ({navigation}) => {
    
    const register = () => {
        navigation.navigate(LOGIN_SCREEN.route);
    }
    
    return (
        <Background>
            <View style={styles.registrationPanel}>
                <Text style={styles.title}>
                    {labels.WELCOME_MESSAGE}
                </Text>
                
                <STextInput
                    style={styles.input}
                    label={labels.NAME}
                />
                
                <STextInput
                    style={styles.input}
                    label={labels.MAIL}
                />

                <STextInput
                    style={styles.input}
                    label={labels.PASSWORD}
                />
                
                <TouchableOpacity 
                    onPress={register}
                    style={[commonStyles.button, styles.registerButton]}
                >
                    <Text style={[commonStyles.buttonText, styles.button]}>
                        {labels.SING_UP}
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

    registerButton: {
        alignSelf: 'center',
        backgroundColor: styleConsts.SECONDARY_COLOR,
        borderColor: styleConsts.SECONDARY_COLOR,
        height: 50
    },

    registrationPanel: {
        backgroundColor: styleConsts.TILE_BACKGROUND_COLOR,
        marginVertical: 30,
        marginHorizontal: 20,
        paddingHorizontal: 30,
        paddingVertical: 30,
        borderRadius: 5,
        opacity: 0.7
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