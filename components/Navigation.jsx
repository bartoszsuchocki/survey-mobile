import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import PrepareSurveyForm from './PrepareSurveyForm';
import SelectSurveys from './SelectSurveys';
import labels from '../utils/labels';
import SurveyView from './SurveyView';

export const HOME_SCREEN = {
    component: Home,
    displayOnMenuList: false, 
    route: 'home', 
    title: labels.HOME
}

export const ADD_SURVEY_SCREEN = {
    component: PrepareSurveyForm, 
    displayOnMenuList: true, 
    route: 'newSurvey', 
    title: labels.ADD_NEW_SURVEY
}

export const SELECT_SURVEYS_SCREEN = {
    component: SelectSurveys, 
    displayOnMenuList: true, 
    route: 'selectSurveys', 
    title: labels.SELECT_SURVEYS
}

export const LOG_OUT_SCREEN = {
    component: Home, 
    displayOnMenuList: true, 
    route: 'logOut', 
    title: labels.LOG_OUT
}

export const VIEW_SURVEY_SCREEN = {
  component: SurveyView, 
  displayOnMenuList: false, 
  route: 'survey', 
  title: labels.SELECT_SURVEYS
}

export const NAVIGATION_ITEMS = [
    HOME_SCREEN,
    ADD_SURVEY_SCREEN,
    SELECT_SURVEYS_SCREEN,
    LOG_OUT_SCREEN,
    VIEW_SURVEY_SCREEN
];

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            headerMode="float"
            screenOptions={{header: Header}}
        >
            { NAVIGATION_ITEMS.map(item => (
                <Stack.Screen
                    component={item.component}
                    key={item.route}
                    name={item.route}
                    options={{headerTitle: item.title}}
                />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Header = ({ navigation, previous, scene }) => {
    const title = scene.descriptor.options.headerTitle;
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}> {title} </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2F303A",
    paddingTop: 10
  },

  headerTitle: {
    color: "#EB5757",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

