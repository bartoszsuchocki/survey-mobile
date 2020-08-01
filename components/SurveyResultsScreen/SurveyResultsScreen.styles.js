import { StyleSheet } from 'react-native';
import styleConsts from '../../utils/styleConsts';

export default StyleSheet.create({
    answer: {
        margin: 5,
        justifyContent: 'center'
    },
    
    answerBar: {
        backgroundColor: styleConsts.SECONDARY_COLOR,
        height: 30,
        width: 50,
        borderBottomLeftRadius: 2,
        borderTopLeftRadius: 2,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },

    answerContent: {
        fontSize: 14,
        lineHeight: 24,
        color: styleConsts.FONT_PRIMARY_COLOR,
    },

    answersContainer: {
        marginBottom: 15
    },

    answerRespondCount: {
        color: styleConsts.FONT_PRIMARY_COLOR,
        marginLeft: 5
    },

    answerStatistics: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    container: {
        marginHorizontal: 30,
        marginBottom: 20,
    },

    questionText: {
        color: styleConsts.FONT_PRIMARY_COLOR,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20
    }
});

