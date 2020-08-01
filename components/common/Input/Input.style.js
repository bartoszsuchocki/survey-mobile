import { StyleSheet } from 'react-native';
import styleConsts from '../../../utils/styleConsts';

export default StyleSheet.create({
    label: {
        fontSize: 14,
        color: styleConsts.FONT_PRIMARY_COLOR,
    },
    
    textInput: {
        backgroundColor: styleConsts.INPUT_BACKGROUND_COLOR,
        color: styleConsts.FONT_PRIMARY_COLOR,
        borderColor: styleConsts.SECONDARY_COLOR,
        borderWidth: 1,
        borderRadius: 2,
        height: 45
    },

    textArea: {
        backgroundColor: styleConsts.INPUT_BACKGROUND_COLOR,
        color: styleConsts.FONT_PRIMARY_COLOR,
        borderColor: styleConsts.SECONDARY_COLOR,
        borderWidth: 1,
        borderRadius: 2,
        minHeight: 100
    }
});