import React, {useState} from 'react';
import Background from './Background';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default ({route}) => {
    return (
        <Background>
            <SurveyFillManager survey={route.params.survey}/>
        </Background>
    )
}

const SurveyFillManager = ({survey: propsSurvey}) => {
    const [survey, setSurvey] = useState(propsSurvey);

    return (
        <ScrollView style={styles.formContainer}>
            {survey.questions && survey.questions.map(question => (
                <View 
                    key={'q'+question.number}
                >
                    <Text>{question.content}</Text>
                    {question.answers && question.answers.map(answer => (
                        <View 
                            key={'a' + question.number + answer.number}
                        >
                            <Text>{answer.content}</Text>
                        </View>
                    ))}
                </View>
            ))}
            
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: 30,
        marginTop: 40,
        marginBottom: 20,
    },
});