import React, {useState} from 'react';
import Background from './Background';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { STextInput, STextArea } from './common/Inputs';
import Question from './Question';
import labels from '../utils/labels';
import { commonStyles } from '../utils/styleConsts';
import { createEmptyQuestion } from '../utils/emptyObjectsGenerator';

export default ({survey: propsSurvey}) => {
    
    const [survey, setSurvey] = useState(propsSurvey);

    const editQuestion = (newQuestion) => {
        const questions = [...survey.questions];
        questions[newQuestion.number] = newQuestion;
        setSurvey({...survey, questions});
    };

    const removeQuestion = (questionNumber) => {
        const questions = survey.questions
            .filter(question => question.number !== questionNumber)
            .map((question, index) => ({...question, number: index}));
        
        setSurvey({...survey, questions});
    }

    const addQuestion = () => {
        const newQuestion = createEmptyQuestion(survey.questions ? survey.questions.length : 0)
        setSurvey({...survey, questions: [...survey.questions, newQuestion]});
    }

    const save = () => {

    }

    const cancel = () => {

    }

    return (
        <ScrollView style={styles.formContainer}>
            <View style={styles.input}>
                <STextInput 
                    label={labels.TITLE}
                    onChangeText={text => setSurvey({...survey, title: text})}
                    value={survey.title}
                />
            </View>
            <View style={styles.input}>
                <STextArea
                    label={labels.DESCRIPTION}
                    onChangeText={text => setSurvey({...survey, description: text})}
                    value={survey.description}                        
                />
            </View>
            <View style={styles.questionsContainer}>
                {survey.questions.map(question => (
                    <View style={styles.question}>
                        <Question 
                            onEdit={editQuestion}
                            onRemove={() => removeQuestion(question.number)}
                            question={question}
                        />
                    </View>
                ))}
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    onPress={addQuestion}
                    style={[commonStyles.button, commonStyles.buttonInversed]}
                >
                    <Text style={commonStyles.buttonText}>{labels.ADD_QUESTION}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    onPress={cancel}
                    style={[commonStyles.button, commonStyles.buttonInversed]}
                >
                    <Text style={[commonStyles.buttonText, styles.button]}>{labels.CANCEL}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={save}
                    style={[commonStyles.button, commonStyles.buttonInversed, styles.button]}
                >
                    <Text style={commonStyles.buttonText}>{labels.SAVE}</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}



const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: 30,
        marginTop: 40,
        marginBottom: 20,
    },

    input: {
        marginBottom: 20
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },

    button: {
        marginHorizontal: 12,
    },

    question: {
        marginTop: 30
    },

    questionsContainer: {
        marginBottom: 10
    },
});