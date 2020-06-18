import 'react-native-gesture-handler';
import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import PrepareSurveyForm from './PrepareSurveyScreen';
import SelectSurveys from './SelectSurveys';
import labels from '../utils/labels';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import ShowSurveyScreen from './ShowSurveyScreen';
import FillSurveyScreen from './FillSurveyScreen';
import SurveyResultsScreen from './SurveyResultsScreen';
import { UserContext } from '../utils/userContextHelper';
import TermsAndConditions from './TermsAndConditions';

export const TERMS_CONDITIONS_SCREEN = {
  component: TermsAndConditions,
  displayOnMenuList: true,
  route: 'termsCondition',
  title: labels.TERMS_CONDITIONS
}

export const REGISTRATION_SCREEN = {
  component: RegistrationForm,
  displayOnMenuList: false,
  route: 'register',
  title: labels.SING_UP
}

export const LOGIN_SCREEN = {
    component: LoginForm,
    displayOnMenuList: false,
    route: 'login',
    title: labels.LOG_IN
}

export const HOME_SCREEN = {
    component: Home,
    displayOnMenuList: false, 
    route: 'home', 
    title: labels.HOME
}

export const ADD_SURVEY_SCREEN = {
    adminOnly: true,
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
    component: LoginForm, 
    displayOnMenuList: true, 
    route: 'logOut', 
    title: labels.LOG_OUT
}

export const SHOW_SURVEY_SCREEN = {
  component: ShowSurveyScreen, 
  displayOnMenuList: false, 
  route: 'survey', 
  title: labels.SURVEY
}

export const FILL_SURVEY_SCREEN = {
  component: FillSurveyScreen, 
  displayOnMenuList: false, 
  route: 'fill', 
  title: labels.FILL_SURVEY
}

export const SURVEY_RESULTS_SCREEN = {
    component: SurveyResultsScreen, 
    displayOnMenuList: false, 
    route: 'result', 
    title: labels.RESULTS
}

export const NAVIGATION_ITEMS = [
    LOGIN_SCREEN,
    REGISTRATION_SCREEN,
    HOME_SCREEN,
    ADD_SURVEY_SCREEN,
    SELECT_SURVEYS_SCREEN,
    TERMS_CONDITIONS_SCREEN,
    LOG_OUT_SCREEN,
    SHOW_SURVEY_SCREEN,
    FILL_SURVEY_SCREEN,
    SURVEY_RESULTS_SCREEN
];

const Stack = createStackNavigator();

export default () => {

  const {user} = useContext(UserContext);

  return (
    <NavigationContainer>
        <Stack.Navigator
            headerMode="float"
            initialRouteName={user.email ? HOME_SCREEN.route : LOGIN_SCREEN.route}
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
    height: 90,
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

