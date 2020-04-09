import React from 'react';
import Background from './Background';
import SurveyView from './SurveyView';
import { createEmptySurvey } from '../utils/emptyObjectsGenerator';

export default () => {
    return (
        <Background>
            <SurveyView survey={createEmptySurvey()}/>
        </Background>
    )
}