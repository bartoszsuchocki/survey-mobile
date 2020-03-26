
const styleConsts = {
    FONT_PRIMARY_COLOR: '#FFF',
    INPUT_BACKGROUND_COLOR: '#2F303A',
    SECONDARY_COLOR: '#EB5757',
    SHADOW_COLOR: '#FFF',
    TILE_BACKGROUND_COLOR: '#202027'
}

export default styleConsts;

export const commonStyles = {
    buttonSmallInversed: {
        width: 70,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderColor: styleConsts.SECONDARY_COLOR,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: styleConsts.TILE_BACKGROUND_COLOR
    },
    buttonSmallInversedText: {
        color: styleConsts.FONT_PRIMARY_COLOR,
        fontSize: 16,
        lineHeight: 21
    }
}