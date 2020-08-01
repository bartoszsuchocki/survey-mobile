import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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