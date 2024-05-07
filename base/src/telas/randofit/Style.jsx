import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    main_container: {
        position: 'relative',
        backgroundColor: '#1E1716',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    rand_container: {
        flex: 1,
        flexDirection: 'column',
        rowGap: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    rand_card: {
        width: 150,
        borderRadius: 30,
    },
    rand_card_img: {
        width: 150,
        resizeMode: 'cover',
    },

    container_action: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    button_action: {
        width: 120,
        height: 30,
        borderRadius: 10,
    },
});
export default style