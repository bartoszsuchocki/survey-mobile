import React, { useState } from 'react';
import { SCheckBox, STextInput } from '../common/Input/Input';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import styleConsts, { commonStyles } from '../../utils/styleConsts';
import labels from '../../utils/labels';
import Background from '../common/Background/Background';
import { LOGIN_SCREEN } from '../Navigation/Navigation';
import { registerUser } from '../../api/api';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './RegistrationForm.style.js';

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