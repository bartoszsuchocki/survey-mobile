import React from 'react';
import Background from './Background';
import SurveyView from './SurveyView';
import { createEmptySurvey } from '../utils/emptyObjectsGenerator';

export default ({navigation}) => {
    return (
        <Background>
            <SurveyView 
                onCancel={() => navigation.goBack()}
                onSave={() => navigation.goBack()}
                survey={createEmptySurvey()}
            />
        </Background>
    )
}