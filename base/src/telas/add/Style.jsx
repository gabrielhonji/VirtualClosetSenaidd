import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    main_container: {
        position: "relative",
        flex: 1,
        backgroundColor: '#1E1716',
        paddingVertical: 40,
        paddingHorizontal: 30,
    },
    container_1: {
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 20,
        width: '100%',
        height: 170,
    },
    container_2: {
        flex: 2,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttomgroup_container: {
        flexDirection: 'row',
        gap: 10,
    },
    button_container: {
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttomgroup_1: {
        width: 175,
    },
    buttomgroup_2: {
        width: 113,
    },
    input: {
        width: 360,
        height: 58,
        backgroundColor: '#2D2221',
    },
    bottominput: {
        width: 175,
        height: 38,
    },
    img_button: {
        backgroundColor: '#fff0',
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_shadow_button: {
        shadowColor: '#a58582',
    },
    main_buttom: {
        borderRadius: 10,
        width: 180,
        height: 60,
    },
    buttom_text: {
        color: '#F5F0F6',
        fontWeight: '500',
        fontSize: 14,
    },
    fav_button: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginHorizontal: 0,
    },
    fav_button_text: {
        color: '#B2AEB2',
    },

    img: {
        borderRadius: 20,
        width: '100%',
        height: 170,
    },

    text: {
        color: '#F5F0F6',
    },
    subtext: {
        color: '#B2AEB2',
    },
});
export default style