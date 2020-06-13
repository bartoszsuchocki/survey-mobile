import React from 'react';
import { StyleSheet, View } from 'react-native';
import { STextInput, STextArea } from './common/Inputs';
import { CustomIcon, customIconLabels } from './common/CustomIcon';
import labels from '../utils/labels';
import { createEmptyAnswer } from '../utils/emptyObjectsGenerator';

export default ({onEdit, onRemove, question}) => {

    const addAnswer = () => {
        const newAnswer = createEmptyAnswer(question.answers ? question.answers.length : 0);
        onEdit({...question, answers: [...question.answers, newAnswer]});
    };

    const editAnswer = (number, newContent) => {
        const answers = question.answers.map(answer => (
            answer.number === number
                ? {...answer, text: newContent}
                : answer
        ));
        onEdit({...question, answers});
    }

    const removeAnswer = (answerNumber) => {
        const answers = question.answers
            .filter(answer => answer.number !== answerNumber)
            .map((answer, index) => ({...answer, number: index + 1}));

        onEdit({...question, answers})
    }

    return (
        <View style={styles.question}>
            <View style={styles.quitIconContainer}>
                <CustomIcon
                    iconLabel={customIconLabels.QUIT}
                    onClick={onRemove}
                />
            </View>
            <STextArea
                label={labels.QUESTION}
                onChangeText={text => onEdit({...question, text})}
                style={styles.content}
                value={question.text}
            />
            {question.answers && question.answers.map(answer => (
                <Answer
                    answer={answer}
                    key={answer.number}
                    onEdit={text => editAnswer(answer.number, text)}
                    onRemove={removeAnswer}
                />
            ))}
            <CustomIcon 
                iconLabel={customIconLabels.ADD}
                onClick={()=>addAnswer()}
            />
        </View>
    )
}

const Answer = ({answer, onEdit, onRemove}) => (
    <View style={styles.answer}>
        <STextInput
            onChangeText={onEdit}
            style={styles.answerInput}
            value={answer.text}
        />
        <CustomIcon 
            iconLabel={customIconLabels.TRASH}
            onClick={()=>onRemove(answer.number)}
        />
    </View>
)

const styles = StyleSheet.create({
    answer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    answerInput: {
        flex: 1
    },

    question: {
        borderWidth: 1,
        borderColor: 'rgba(235, 87, 87, 0.25)',
        padding: 10
    },

    content: {
        marginBottom: 10,
    },

    quitIconContainer: {
        alignItems: 'flex-end',
        paddingBottom: 5
    }
});