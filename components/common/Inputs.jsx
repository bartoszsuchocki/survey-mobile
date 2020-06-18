import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styleConsts from '../../utils/styleConsts';
import { CustomIcon, customIconLabels } from './CustomIcon';

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
);

export const SCheckBox = ({checked, label, onChange, style}) => (
    <View style={style}>
        { label &&
            <Text style={styles.label}>
                {label}
            </Text>
        }
        <TouchableOpacity 
            onPress={onChange}
        >
            <CustomIcon 
                iconLabel={checked 
                    ? customIconLabels.CHECKBOX_SELECTED
                    : customIconLabels.CHECKBOX_UNSELECTED
                } 
            />
        </TouchableOpacity>
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