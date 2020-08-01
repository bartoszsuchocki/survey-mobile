import React, {useState} from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { STextInput, STextArea } from '../Input/Input';
import Question from './Question/Question';
import labels from '../../../utils/labels';
import styleConsts, { commonStyles} from '../../../utils/styleConsts';
import { createEmptyQuestion } from '../../../utils/emptyObjectsGenerator';
import { postSurvey, updateSurvey } from '../../../api/api';
import styles from './SurveyView.style.js';

export default ({onCancel, onSave, survey: propsSurvey}) => {
    
    const [survey, setSurvey] = useState(propsSurvey);
    const [isLoading, setIsLoading] = useState(false);

    const editQuestion = (editedQuestion) => {
        const questions = [...survey.questions];
        questions[editedQuestion.number] = editedQuestion;
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
        setIsLoading(true);
        const saveMethod = survey.id ? updateSurvey : postSurvey;

        saveMethod(survey).then(responeSurvey => {
        }).catch(error => {
        }).finally(() => {
            onSave();
        })
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
                    <View style={styles.input}>
                        <STextInput 
                            label={labels.TITLE}
                            onChangeText={text => setSurvey({...survey, name: text})}
                            value={survey.name}
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
                            <View key={question.number} style={styles.question}>
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
                            onPress={onCancel}
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
            )
            
        }
        </>
    );
}