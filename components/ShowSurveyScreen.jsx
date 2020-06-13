import React from 'react';
import SurveyView from './SurveyView';
import Background from './Background';

export default ({ navigation, route }) => {
    const goBack = () => {
        if(route.params.onGoBack) {
            route.params.onGoBack();
        }
        navigation.goBack();
    }
    return (
        <Background>
            <SurveyView 
                onCancel={goBack}
                onSave={goBack}
                survey={route.params.survey}
            />
        </Background>
    )
}
    
    