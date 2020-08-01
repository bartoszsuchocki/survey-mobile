import React from 'react';
import Background from '../common/Background/Background';
import SurveyView from '../common/SurveyView/SurveyView';
import { createEmptySurvey } from '../../utils/emptyObjectsGenerator';

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