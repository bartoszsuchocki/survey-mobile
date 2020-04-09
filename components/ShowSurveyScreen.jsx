import React from 'react';
import SurveyView from './SurveyView';
import Background from './Background';

export default ({ navigation, route }) => (
    <Background>
        <SurveyView survey={route.params.survey}/>
    </Background>
)
    
    