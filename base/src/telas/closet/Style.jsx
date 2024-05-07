import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    main_container: {
        backgroundColor: '#1E1716',
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    closet_card_container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        rowGap: 20,
        justifyContent: 'space-around',
        backgroundColor: '#8e6b6b',
    },

    card_button: {
        width: 150,
        height: 200,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card_img: {
        width: '100%',
        height: '100%',
    },

    modal_content: {
        backgroundColor: '#e1e1e1',
        height: '100%',
        padding: 20,
    },
});
export default style