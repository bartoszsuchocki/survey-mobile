import { StyleSheet } from 'react-native';
import styleConsts from '../../utils/styleConsts';

export default StyleSheet.create({
    
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