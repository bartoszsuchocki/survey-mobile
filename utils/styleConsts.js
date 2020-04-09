
const styleConsts = {
    BACKGROUND_COLOR: '#2F303A',
    FONT_PRIMARY_COLOR: '#FFF',
    INPUT_BACKGROUND_COLOR: '#2F303A',
    SECONDARY_COLOR: '#EB5757',
    SHADOW_COLOR: '#FFF',
    TILE_BACKGROUND_COLOR: '#202027'
}

export default styleConsts;

export const commonStyles = {
    button: {
        width: 120,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: styleConsts.TILE_BACKGROUND_COLOR,
        borderColor: styleConsts.SECONDARY_COLOR,
        borderWidth: 1,
        borderRadius: 4,
    },
    
    buttonSmall: {
        width: 70,
        height: 40,
    },

    buttonInversed: {
        borderColor: styleConsts.SECONDARY_COLOR,
    },

    buttonText: {
        color: styleConsts.FONT_PRIMARY_COLOR,
        fontSize: 16,
        lineHeight: 21
    },
}