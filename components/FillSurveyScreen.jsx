import React, {useState} from 'react';
import Background from './Background';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styleConsts, { commonStyles } from '../utils/styleConsts';
import { CustomIcon, customIconLabels } from './common/CustomIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import labels from '../utils/labels';

export default ({route}) => {
    return (
        <Background>
            <SurveyFillManager survey={route.params.survey}/>
        </Background>
    )
}

const SurveyFillManager = ({survey: propsSurvey}) => {
    const [survey, setSurvey] = useState(propsSurvey);

    //BARTDBG consider changing this logic to operate on ids not 'numbers'
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

    return (
        <ScrollView style={styles.formContainer}>
            {survey.questions && survey.questions.map(question => (
                <View 
                    key={'qst'+question.number}
                >
                    <Text style={styles.questionText}>{question.content}</Text>
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
                                <Text style={styles.answerContent}>{answer.content}</Text>
                            </View>
                        </TouchableOpacity>
                        
                    ))}
                    </View>
                </View>
            ))}

            <TouchableOpacity 
                style={[commonStyles.button, styles.submitButton]}
            >
                <Text style={commonStyles.buttonText}>{labels.SUBMIT}</Text>
            </TouchableOpacity>
            
        </ScrollView>
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