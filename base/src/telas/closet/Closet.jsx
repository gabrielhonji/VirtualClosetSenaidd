import React, { useEffect, useState } from "react";
import { Image, View, SafeAreaView, ScrollView } from "react-native";
import style from "./Style.jsx";
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

export default function Closet() {
    const [visible_1, setVisible_1] = React.useState(false);
    const [visible_2, setVisible_2] = React.useState(false);

    const showModal_1 = () => setVisible_1(true);
    const hideModal_1 = () => setVisible_1(false);
    const showModal_2 = () => setVisible_2(true);
    const hideModal_2 = () => setVisible_2(false);

    return (
        <SafeAreaView style={style.main_container}>
                    <PaperProvider>
                        <Portal>
                            <Modal visible={visible_1} onDismiss={hideModal_1} contentContainerStyle={style.modal_content}>
                                <Text>Lor</Text>
                            </Modal>
                        </Portal>
                        <Button mode="outlined" contentStyle={style.card_button} style={style.card_button} onPress={showModal_1}>
                            <Image style={style.card_img} source={require('../../../res/img/closet-img-1.png')}/>
                        </Button>
                    </PaperProvider>
            <ScrollView>
                <View style={style.closet_card_container}>
                    <PaperProvider>
                        <Portal>
                            <Modal visible={visible_2} onDismiss={hideModal_2} contentContainerStyle={style.modal_content}>
                                <Text>Example Modal. Click outside this area to dismiss.</Text>
                            </Modal>
                        </Portal>
                        <Button mode="outlined" contentStyle={style.card_button} style={style.card_button} onPress={showModal_2}>
                            <Image style={style.card_img} source={require('../../../res/img/closet-img-2.png')}/>
                        </Button>
                    </PaperProvider>
                </View>
                    {/* <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-1.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-2.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-3.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-4.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-5.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-6.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-1.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-2.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-3.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-4.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-5.png')}/>
                    </View>
                    <View style={style.closet_card}>
                        <Image style={style.closet_card_img} source={require('../../../res/img/closet-img-6.png')}/>
                    </View> */}
            </ScrollView>
        </SafeAreaView>
    )
};