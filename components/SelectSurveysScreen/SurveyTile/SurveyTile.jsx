import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import labels from '../../../utils/labels';
import { commonStyles } from '../../../utils/styleConsts';
import styles from './SurveyTile.style.js';

export default ({adminVersion = false, onDelete, onFill, onShowResults, onView, survey}) => {
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