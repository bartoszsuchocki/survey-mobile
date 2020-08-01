import { StyleSheet } from 'react-native';
import styleConsts from '../../utils/styleConsts';

export default StyleSheet.create({
    input: {
        marginVertical: 15
    },

    loginButton: {
        alignSelf: 'center',
        backgroundColor: styleConsts.SECONDARY_COLOR,
        borderColor: styleConsts.SECONDARY_COLOR,
        height: 50
    },

    loginPanel: {
        backgroundColor: styleConsts.TILE_BACKGROUND_COLOR,
        marginVertical: 30,
        marginHorizontal: 20,
        paddingHorizontal: 30,
        paddingVertical: 30,
        borderRadius: 5,
        opacity: 0.7
    },

    registrationLink: {
        fontSize: 16,
        color: '#91CBF1',
    },

    registrationLinkContainer: {
        alignSelf: 'flex-end',
        marginTop: 30
    },

    title: {
        alignSelf: 'center',
        color: styleConsts.SECONDARY_COLOR,
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 21,
        textAlign: "center",
        padding: 10
    }
});