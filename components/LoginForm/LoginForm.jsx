import React, { useState, useContext } from 'react';
import { STextInput } from '../common/Input/Input';
import { ActivityIndicator, AsyncStorage, View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styleConsts, { commonStyles } from '../../utils/styleConsts';
import labels from '../../utils/labels';
import Background from '../common/Background/Background';
import { HOME_SCREEN, REGISTRATION_SCREEN } from '../Navigation/Navigation';
import { login } from '../../api/api';
import { UserContext } from '../../utils/userContextHelper';
import styles from './LoginForm.styles.js';

export default ({navigation}) => {

    const {onLogin} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);
    
    const loginUser = () => {
        setIsLoading(true);
        login(email, password).then(response => {
            onLogin(response.data);
            AsyncStorage.setItem("userData", response.data);  
            navigation.navigate(HOME_SCREEN.route);
        }).finally(() => {
            setEmail('');
            setPassword('');
            setIsLoading(false);
        });
    }

    const goToRegistrationScreen = () => {
        navigation.navigate(REGISTRATION_SCREEN.route);
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
                    <View style={styles.loginPanel}>
                        <Text style={styles.title}>
                            {labels.WELCOME_MESSAGE}
                        </Text>

                        <STextInput
                            label={labels.MAIL}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input}
                            value={email}
                        />

                        <STextInput
                            label={labels.PASSWORD}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={styles.input}
                            value={password}
                        />
                        
                        <TouchableOpacity 
                            onPress={loginUser}
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
                </ScrollView>
            )}
        </Background>
    )
}