import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import labels from '../utils/labels';
import styleConsts, {commonStyles} from '../utils/styleConsts';

export default ({survey}) => {
    return (
        <View style={styles.surveysContainer}>
            <View style={styles.survey}>
                <View style={styles.header}>
                    <Text style={styles.surveyTitle}>{survey.title}</Text>
                </View>
                <View style={styles.propertiesContainer}>
                    <View style={styles.property}>
                        <Text style={styles.propertyName}>{labels.QUESTIONS}</Text>
                        <Text style={styles.propertyValue}>{survey.questionsNumber}</Text>
                    </View>
                    <View style={styles.property}>
                        <Text style={styles.propertyName}>{labels.START_DATE}</Text>
                        <Text style={styles.propertyValue}>{survey.startDate}</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.propertyName}>{labels.DESCRIPTION}</Text>
                        <Text style={styles.propertyValue}>{survey.description}</Text>
                    </View>
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={commonStyles.buttonSmallInversed}>
                        <Text style={commonStyles.buttonSmallInversedText}>{labels.VIEW}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyles.buttonSmallInversed}>
                        <Text style={commonStyles.buttonSmallInversedText}>{labels.PUBLISH}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyles.buttonSmallInversed}>
                        <Text style={commonStyles.buttonSmallInversedText}>{labels.DELETE}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    actionButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 30
    },
    
    descriptionContainer: {

    },
    
    header: {
        marginVertical: 15,
        marginHorizontal: 20,
        flexDirection: "row"
    },

    propertiesContainer: {
        marginHorizontal: 20,
    },

    property: {
        flexDirection: "row",
        marginBottom: 5
    },

    propertyName: {
        marginRight: 10,
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 20,
        color: styleConsts.FONT_PRIMARY_COLOR
    },

    propertyValue: {
        fontSize: 14,
        lineHeight: 20,
        color: styleConsts.FONT_PRIMARY_COLOR
    },

    survey: {
        opacity: 0.75,
        width: "75%",
        backgroundColor: styleConsts.TILE_BACKGROUND_COLOR,
        borderColor: styleConsts.SECONDARY_COLOR,
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 20,
        shadowOffset: {width: 0, height: 10},
        shadowColor: styleConsts.SHADOW_COLOR,
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5
    },

    surveysContainer: {
        alignItems: "center",
        marginTop: 20
    },

    surveyTitle: {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 19,
        color: styleConsts.FONT_PRIMARY_COLOR,
        textAlign: "center"
    }

});