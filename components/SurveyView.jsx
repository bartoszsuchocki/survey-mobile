import React, {useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Background from './Background';
import { STextInput, STextArea } from './common/Inputs';
import Question from './Question';


export default ({ navigation, route }) => {
    
    const [survey, setSurvey] = useState(route.params.survey);

    const editQuestion = (newQuestion) => {
        const questions = [...survey.questions];
        questions[newQuestion.number] = newQuestion;
        setSurvey({...survey, questions});
    };

    return (
        <Background>
            <ScrollView style={styles.formContainer}>
                <View style={styles.input}>
                    <STextInput 
                        onChangeText={text => setSurvey({...survey, title: text})}
                        value={survey.title}
                    />
                </View>
                <View style={styles.input}>
                    <STextArea
                        onChangeText={text => setSurvey({...survey, description: text})}
                        value={survey.description}                        
                    />
                </View>
                {survey.questions.map(question => (
                    <Question 
                        onQuestionEdit={editQuestion}
                        question={question}
                    />
                ))}
            </ScrollView>
            
        </Background>
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
    }
})