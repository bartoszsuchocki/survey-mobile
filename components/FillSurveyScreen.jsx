import React, {useState} from 'react';
import Background from './Background';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import styleConsts, { commonStyles } from '../utils/styleConsts';
import { CustomIcon, customIconLabels } from './common/CustomIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import labels from '../utils/labels';
import { postSurveyResult } from '../api/api';

export default ({route, navigation}) => {
    return (
        <Background>
            <SurveyFillManager 
                onSubmit={() => navigation.goBack()}
                survey={route.params.survey}
            />
        </Background>
    )
}

const SurveyFillManager = ({onSubmit, survey: propsSurvey}) => {
    const [survey, setSurvey] = useState(propsSurvey);
    const [isLoading, setIsLoading] = useState(false);

    const changeAnswerSelection = (question, answerNumber) => {
        const answers = question.answers.map(answer => {
            const isSelected = answer.number === answerNumber
                ? !answer.isSelected
                : false;
            return {...answer, isSelected};
        });
        return {...question, answers};
    }

    const handleAnswerClick = (questionNumber, answerNumber) => {
        const updatedQuestions = survey.questions.map(question => (
            question.number === questionNumber
                ? changeAnswerSelection(question, answerNumber)
                : question
        ));

        setSurvey({...survey, questions: updatedQuestions});
    }

    const prepareSurveyReply = (survey) => {
        const questions = survey.questions.map(question => ({
            number: question.number,
            chosenAnswer: question.answers.find(answer => answer.isSelected).number
        }));

        return {
            id: survey.id,
            questions
        }
    }

    const submit = () => {
        setIsLoading(true);

        postSurveyResult(prepareSurveyReply(survey)).then(() => {
            onSubmit();
            setIsLoading(false);
        });
    }

    return (
        <>
        {isLoading
            ? (
                <View style={commonStyles.loaderContainer}>
                    <ActivityIndicator size={'large'} color={styleConsts.SECONDARY_COLOR} />
                </View>
            )
            : (
                <ScrollView style={styles.formContainer}>
                    {survey.questions && survey.questions.map(question => (
                        <View 
                            key={'qst'+question.number}
                        >
                            <Text style={styles.questionText}>{question.text}</Text>
                            <View style={styles.answersContainer}>
                            {question.answers && question.answers.map(answer => (
                                <TouchableOpacity 
                                    onPress={() => handleAnswerClick(question.number, answer.number)}
                                    key={'asw' + question.number + answer.number}>
                                    <View style={styles.answer}>
                                        <CustomIcon 
                                            iconLabel={answer.isSelected 
                                                ? customIconLabels.CHECKBOX_SELECTED
                                                : customIconLabels.CHECKBOX_UNSELECTED
                                            } 
                                        />
                                        <Text style={styles.answerContent}>{answer.text}</Text>
                                    </View>
                                </TouchableOpacity>
                                
                            ))}
                            </View>
                        </View>
                    ))}

                    <TouchableOpacity 
                        onPress={submit}
                        style={[commonStyles.button, styles.submitButton]}
                    >
                        <Text style={commonStyles.buttonText}>{labels.SUBMIT}</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
            )
        }
        </>
    );
}



const styles = StyleSheet.create({
    
    answer: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },

    answersContainer: {
        marginVertical: 15
    },

    answerContent: {
        fontSize: 14,
        lineHeight: 24,
        color: styleConsts.FONT_PRIMARY_COLOR,
        marginLeft: 15
    },

    formContainer: {
        marginHorizontal: 30,
        marginTop: 40,
        marginBottom: 20,
    },

    questionText: {
        color: styleConsts.FONT_PRIMARY_COLOR,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20
    },

    submitButton: {
        alignSelf: 'center',
        marginTop: 15

    }
});