import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import styleConsts from '../../utils/styleConsts';

export const STextInput = (props) => (
    <TextInput
        {...props}
        style={styles.textInput}
    />
)


export const STextArea = (props) => (
    <TextInput
        multiline={true}
        style={styles.textArea}
        {...props}
    />
)

const styles = StyleSheet.create({
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
})