import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    main_container: {
        position: "relative",
        flex: 1,
        backgroundColor: '#1E1716',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttongroup_container: {
        flexDirection: 'row',
        gap: 10,
    },
    buttongroup: {
        width: 180,
    },
    input: {
        height: 50,
        backgroundColor: '#2d2221',
    },

    main_button: {
        backgroundColor: '#211c1b',
        borderRadius: 10,
        width: 230,
        height: 60,
    },
    button_text: {
        color: '#F5F0F6',
        fontWeight: '600',
        fontSize: 16,
        fontFamily: 'font-awesome',
    },
    text: {
        color: '#F5F0F6',
    },
});
export default style