import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import Background from '../common/Background/Background';
import { NAVIGATION_ITEMS } from '../Navigation/Navigation';
import { UserContext } from '../../utils/userContextHelper';
import styles from './Home.style.js';

export default ({navigation}) => {

    const {user} = useContext(UserContext);

    const renderNavigationItem = item => {
        return (
            <View>
                <Text 
                    style={styles.navigationItemTitle} 
                    onPress={() => navigation.navigate(item.route)}
                >
                    {item.title}
                </Text>
            </View>
        );
    }

    const menuItems = NAVIGATION_ITEMS.filter(item => (
        item.displayOnMenuList && (!item.adminOnly || user.isCoordinator)
    ));

    return (
        <Background>
            <FlatList
                data={menuItems}
                keyExtractor={navigationItem => navigationItem.route}
                renderItem={({item}) => renderNavigationItem(item) }
            />
        </Background>
    )
}