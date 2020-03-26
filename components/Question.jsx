import React from 'react';
import { View } from 'react-native';
import { STextInput, STextArea } from './common/Inputs';
import { CustomIcon, customIconLabels } from './common/CustomIcon';

export default ({onQuestionEdit, question}) => {

    const addAnswer = () => {
        const editedQuestion = {...question};
        const newAnswer = {
            number: question.answers ? question.answers.length : 0,
            content: ''
        };
        editedQuestion.answers = [...question.answers, newAnswer];
        onQuestionEdit(editedQuestion);
    };

    const editAnswer = (number, newContent) => {
        const editedQuestion = {...question};
        editedQuestion.answers[number] = {...editedQuestion.answers[number], content: newContent};
        onQuestionEdit(editedQuestion);
    } 

    return (
        <View>
            <STextArea
                onChangeText={text => onQuestionEdit({...question, content: text})}
                value={question.content}
            />
            {question.answers.map(answer => (
                <STextInput
                    key={answer.number}
                    onChangeText={text => editAnswer(answer.number, text)}
                    value={answer.content}
                />
            ))}
            <CustomIcon 
                iconLabel={customIconLabels.ADD}
                onClick={()=>addAnswer()}
            />
        </View>
    )
}