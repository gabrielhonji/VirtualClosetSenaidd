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
        flex: 1,
    },
    container_2: {
        flex: 6,
        alignItems: 'center',
    },
    container_3: {
        alignItems: 'center',
    },
    subcontainer: {
        marginBottom: 24,
    },
    title: {
        width: 350,
    },

    input: {
        width: 350,
        height: 60,
        backgroundColor: '#2D2221',
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },

    main_buttom: {
        borderRadius: 10,
        width: 240,
        height: 60,
        marginVertical: 10,
    },
    buttom_text: {
        color: '#F5F0F6',
        fontWeight: '600',
        fontSize: 20,
    },

    text: {
        color: '#F5F0F6',
    },
    subtext: {
        color: '#B2AEB2',
    },
    link: {
        color: '#639aed'
    }
});
export default style