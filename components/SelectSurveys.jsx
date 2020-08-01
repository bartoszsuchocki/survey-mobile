import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import Background from './common/Background';
import Survey from './SurveyTile';
import { SHOW_SURVEY_SCREEN, FILL_SURVEY_SCREEN, SURVEY_RESULTS_SCREEN } from './Navigation';
import { getSurveys, deleteSurvey } from '../api/api';
import styleConsts, { commonStyles } from '../utils/styleConsts';
import { UserContext } from '../utils/userContextHelper';

export default ({navigation}) => {
    const [surveys, setSurveys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const {user} = useContext(UserContext)

    const fetchSurveys = () => {
        setIsLoading(true);

        getSurveys().then(response => {
            setSurveys(response.data);
        }).catch((error) => {
            setSurveys([]);
        }).finally(() => {
           setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchSurveys();
    }, [])

    const handleSurveyView = (survey) => {
        navigation.navigate(SHOW_SURVEY_SCREEN.route, {survey, onGoBack: fetchSurveys});
    }

    const handleShowResults = (survey) => {
        navigation.navigate(SURVEY_RESULTS_SCREEN.route, {surveyId: survey.id});
    }

    const handleSurveyDelete = (surveyId) => {
        setIsLoading(true);

        deleteSurvey(surveyId).then(() => {
            fetchSurveys();
        }).catch(() => {
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const handleFillRequest = (survey) => {
        navigation.navigate(FILL_SURVEY_SCREEN.route, {survey});
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
                <FlatList
                    data={surveys}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <Survey 
                            adminVersion={user.isCoordinator}
                            onDelete={ () => handleSurveyDelete(item.id) }
                            onFill={ () => handleFillRequest(item) }
                            onShowResults={ () => handleShowResults(item) }
                            onView={ () => handleSurveyView(item) }
                            survey={item} 
                        />
                    ) }
                />
            )}
        </Background>
    )
}