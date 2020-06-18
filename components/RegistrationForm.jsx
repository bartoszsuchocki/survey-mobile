import React, { useState } from 'react';
import { SCheckBox, STextInput } from './common/Inputs';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styleConsts, { commonStyles } from '../utils/styleConsts';
import labels from '../utils/labels';
import Background from './Background';
import { LOGIN_SCREEN } from './Navigation';
import { registerUser } from '../api/api';
import { ScrollView } from 'react-native-gesture-handler';

export default ({navigation}) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const register = () => {
        setIsLoading(true);

        registerUser(user).then(() => {
            setIsLoading(false);
            navigation.navigate(LOGIN_SCREEN.route);
        });
    }
    
    return (
        <Background>
            {isLoading 
            ? (
                <View style={commonStyles.loaderContainer}>
                    <ActivityIndicator size={'large'} color={styleConsts.SECONDARY_COLOR} />
                </View>
            )
            : (
                <ScrollView>
                    <View 
                        style={styles.registrationPanel}
                    >
                        <Text style={styles.title}>
                            {labels.WELCOME_MESSAGE}
                        </Text>
                        
                        <STextInput
                            label={labels.NAME}
                            style={styles.input}
                        />
                        
                        <STextInput
                            label={labels.MAIL}
                            style={styles.input}
                        />

                        <STextInput
                            label={labels.PASSWORD}
                            style={styles.input}
                            secureTextEntry={true}
                        />

                        <SCheckBox 
                            checked={user.isCoordinator}
                            label="Is Coordinator"
                            onChange={() => setUser({...user, isCoordinator: !user.isCoordinator})}
                            style={styles.input}
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
                </ScrollView>
            )}    
        </Background> 
    );
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
        marginBottom: 30,
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