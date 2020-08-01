import React, { useEffect, useState } from 'react';
import Background from '../common/Background/Background';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import styleConsts, { commonStyles } from '../../utils/styleConsts';
import { getSurveyResult } from '../../api/api';
import styles from './SurveyResultsScreen.styles.js';

export default ({route}) => {

    const [surveyResult, setSurveyResult] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSurveyResult(route.params.surveyId).then((response) => {
            setSurveyResult(response.data);
        }).catch(()=>{
        }).finally(() => {
            setIsLoading(false);
        })
    }, []);

    return (
        <Background>
            {isLoading
            ? (
                <View style={commonStyles.loaderContainer}>
                    <ActivityIndicator size={'large'} color={styleConsts.SECONDARY_COLOR}/>
                </View>
            )
            : (
                <SurveyResultDisplay surveyResult={surveyResult}/>
            )}
        </Background>
    )
}

const SurveyResultDisplay = ({surveyResult}) => {
    
    const getAnswerRespondPercentage = (question, answer) => (
        (answer.numberOfRespondents / question.totalNumberOfRespondents) * 100
    ).toFixed(2);
    
    return (
        <ScrollView style={styles.container}>
            {surveyResult.questions && surveyResult.questions.map(question => (
                <View 
                    key={'qst'+question.number}
                >
                    <Text style={styles.questionText}>{question.questionText}</Text>
                    <View style={styles.answersContainer}>
                    {question.answers.map(answer => (
                        <View 
                            key={'asw' + answer.number}
                            style={styles.answer}
                        >   
                            <Text style={styles.answerContent}>{answer.answerText}</Text>
                            <View style={styles.answerStatistics}>
                                <View style={[styles.answerBar, {width: getAnswerRespondPercentage(question, answer) - 5+'%'}]}/>
                                <Text style={styles.answerRespondCount}>{answer.numberOfRespondents}</Text>
                            </View>
                        </View>
                    ))}
                    </View>
                    
                </View>
            ))}
        </ScrollView>
    );
}