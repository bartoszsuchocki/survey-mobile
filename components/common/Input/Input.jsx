import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CustomIcon, customIconLabels } from '../CustomIcon/CustomIcon';
import styles from './Input.style.js';

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
);