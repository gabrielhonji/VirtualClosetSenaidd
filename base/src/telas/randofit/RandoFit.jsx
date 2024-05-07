import React from "react";
import {Image, View, SafeAreaView } from "react-native";
import style from "./Style.jsx";
import { Text, Button } from 'galio-framework';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RandoFit() {
    return (
        <SafeAreaView style={style.main_container}>
                <View style={style.rand_container}>
                    <View style={style.rand_card}>
                        <Image style={style.rand_card_img} source={require('../../../res/img/head-img.png')}/>
                    </View>
                    <View style={style.rand_card}>
                        <Image style={style.rand_card_img} source={require('../../../res/img/shirt-img.png')}/>
                    </View>
                    <View style={style.rand_card}>
                        <Image style={style.rand_card_img} source={require('../../../res/img/legs-img.png')}/>
                    </View>
                    <View style={style.rand_card}>
                        <Image style={style.rand_card_img} source={require('../../../res/img/shoes-img.png')}/>
                    </View>
                </View>
                <View style={style.container_action}>
                    <Button color="#473736" shadowless style={style.button_action}><MaterialCommunityIcons name="shuffle" color={'#B2AEB2'} size={24} /></Button>
                    <Button color="#473736" shadowless style={style.button_action}><MaterialCommunityIcons name="bookmark-outline" color={'#B2AEB2'} size={24} /></Button>
                </View>
        </SafeAreaView>
    )
}