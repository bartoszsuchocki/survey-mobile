import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import styleConsts from '../../utils/styleConsts';

export const STextInput = (props) => (
    <View style={props.style}>
        { props.label &&
            <Text style={styles.label}>
                {props.label}
            </Text>
        }
        <TextInput
            {...props}        
            style={styles.textInput}
        />
    </View>
)


export const STextArea = (props) => (
    <View>
        { props.label &&
            <Text style={styles.label}>
                {props.label}
            </Text>
        }
        <TextInput
            multiline={true}
            {...props}
            style={[
                props.style,
                styles.textArea
            ]}
        />
    </View>
)

const styles = StyleSheet.create({
    
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
})