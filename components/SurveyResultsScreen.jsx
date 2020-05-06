import React from 'react';
import Background from './Background';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styleConsts from '../utils/styleConsts';

export default ({route}) => {
    return (
        <Background>
            <SurveyResultDisplay surveyResult={route.params.surveyResult} />
        </Background>
    )
}

const SurveyResultDisplay = ({surveyResult}) => {
    return (
        <ScrollView style={styles.container}>
            {surveyResult.questions && surveyResult.questions.map(question => (
                <View 
                    key={'qst'+question.number}
                >
                    <Text style={styles.questionText}>{question.content}</Text>
                    <View style={styles.answersContainer}>
                    {question.answers.map(answer => (
                        <View 
                            key={'asw' + answer.number}
                            style={styles.answer}
                        >   
                            <Text style={styles.answerContent}>{answer.content}</Text>
                            <View style={styles.answerStatistics}>
                                <View style={[styles.answerBar, {width: answer.selectionsPercent+'%'}]}/>
                                <Text style={styles.answerPercentage}>{answer.selectionsPercent+'%'}</Text>
                            </View>
                        </View>
                    ))}
                    </View>
                    
                </View>
            ))}
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    answer: {
        margin: 5,
        justifyContent: 'center'
    },
    
    answerBar: {
        backgroundColor: styleConsts.SECONDARY_COLOR,
        height: 30,
        width: 50,
        borderBottomLeftRadius: 2,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },

    answerContent: {
        fontSize: 14,
        lineHeight: 24,
        color: styleConsts.FONT_PRIMARY_COLOR,
    },

    answersContainer: {
        marginBottom: 15
    },

    answerPercentage: {
        color: styleConsts.FONT_PRIMARY_COLOR,
        marginLeft: 5
    },

    answerStatistics: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    container: {
        marginHorizontal: 30,
        marginBottom: 20,
    },

    questionText: {
        color: styleConsts.FONT_PRIMARY_COLOR,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20
    },

    
});

