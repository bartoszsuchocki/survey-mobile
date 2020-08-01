import { StyleSheet } from 'react-native';
import styleConsts from '../../../utils/styleConsts';

export default StyleSheet.create({
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