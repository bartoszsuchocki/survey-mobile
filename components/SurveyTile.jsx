import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import labels from '../utils/labels';
import styleConsts, {commonStyles} from '../utils/styleConsts';

export default ({adminVersion=true, onDelete, onFill, onShowResults, onView, survey}) => {
    const questionsNumber = survey.questions.length;
    return (
        <View style={styles.surveysContainer}>
            <View style={styles.survey}>
                <View style={styles.header}>
                    <Text style={styles.surveyTitle}>{survey.name}</Text>
                </View>
                <View style={styles.propertiesContainer}>
                    <View style={styles.property}>
                        <Text style={styles.propertyName}>{labels.QUESTIONS}</Text>
                        <Text style={styles.propertyValue}>{questionsNumber}</Text>
                    </View>
                    <View style={styles.property}>
                        <Text style={styles.propertyName}>{labels.START_DATE}</Text>
                        <Text style={styles.propertyValue}>{survey.startDate}</Text>
                    </View>
                    <View style={styles.property}>
                        <Text style={styles.propertyName}>{labels.END_DATE}</Text>
                        <Text style={styles.propertyValue}>{survey.endDate}</Text>
                    </View>
                    <View>
                        <Text style={styles.propertyName}>{labels.DESCRIPTION}</Text>
                        <Text style={styles.propertyValue}>{survey.description}</Text>
                    </View>
                </View>
                {adminVersion
                    ? <AdminButtonPanel 
                        onDelete={onDelete}
                        onShowResults={onShowResults}
                        onView={onView}
                        style={styles.actionButtons}
                    />
                    : <StandardButtonPanel
                        onShowResults={onShowResults}
                        onFill={onFill}
                        style={styles.actionButtons}
                    />
                }
                
            </View>
        </View>
    );
}

const AdminButtonPanel = ({onDelete, onShowResults, onView, style}) => (
    <View style={style}>
        <TouchableOpacity 
            onPress={onView}
            style={[commonStyles.button, commonStyles.buttonSmall, commonStyles.buttonInversed]}
        >
            <Text style={commonStyles.buttonText}>{labels.EDIT}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={onShowResults}
            style={[commonStyles.button, commonStyles.buttonSmall, commonStyles.buttonInversed]}
        >
            <Text style={commonStyles.buttonText}>{labels.RESULTS}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={onDelete}
            style={[commonStyles.button, commonStyles.buttonSmall, commonStyles.buttonInversed]}
        >
            <Text style={commonStyles.buttonText}>{labels.DELETE}</Text>
        </TouchableOpacity>
    </View>
);

const StandardButtonPanel = ({onFill, onShowResults, style}) => (
    <View style={style}>
        <TouchableOpacity 
            onPress={onFill}
            style={[commonStyles.button, commonStyles.buttonSmall, commonStyles.buttonInversed]}
        >
            <Text style={commonStyles.buttonText}>{labels.FILL}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={onShowResults}
            style={[commonStyles.button, commonStyles.buttonSmall, commonStyles.buttonInversed]}
        >
            <Text style={commonStyles.buttonText}>{labels.RESULTS}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    
    actionButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 30
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