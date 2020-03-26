import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Background from './Background';
import { NAVIGATION_ITEMS } from './Navigation';

export default ({navigation}) => {
    const renderNavigationItem = item => {
        if(!item.displayOnMenuList) {
            return null;
        }
        return (
            <View key={item.route}>
                <Text 
                    style={styles.navigationItemTitle} 
                    onPress={() => navigation.navigate(item.route)}
                >
                    {item.title}
                </Text>
            </View>
        );
    }

    return (
        <Background>
            <FlatList
                data={NAVIGATION_ITEMS}
                renderItem={({item}) => renderNavigationItem(item) }
            />
        </Background>
    )
}

const styles = StyleSheet.create({
    navigationItemTitle: {
        marginTop: 30, 
        marginBottom: 15, 
        color:"#FFF", 
        fontSize:25, 
        textAlign: "center"
    }
})