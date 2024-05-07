import React, {useState} from "react";
import {ImageBackground, Alert, View, SafeAreaView, StatusBar } from "react-native";
import style from "./Style.jsx";
import { Button, Text, Input } from 'galio-framework';
import noelBg from '../../../../res/img/noel_bg.jpg';

export default function Imc() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const CalcularIMC = () => {
        const imc = weight / (height * height);

        if (imc < 18.5) {
            var state = 'Magreza';
            var obesity = 0;
        } else if (imc > 18.5 && imc < 24.9) {
            var state = 'Normal';
            var obesity = 0;
        } else if (imc > 24.9 && imc < 29.9) {
            var state = 'Sobrepeso';
            var obesity = 1;
        } else if (imc > 29.9 && imc < 39.9) {
            var state = 'Obesidade';
            var obesity = 2;
        } else if (imc > 40) {
            var state = 'Obesidade Grave';
            var obesity = 3;
        }
        Alert.alert(
            "Resultado",
            `Seu IMC: ${Math.round(imc)}\n\rSeu estado é: ${state}`
        );
    }

    return (
        <SafeAreaView style={style.main_container}>
            <StatusBar hidden />
            <ImageBackground source={noelBg} resizeMode="cover" style={style.container}>
                    <Text h1 style={style.text}>Calcule seu IMC</Text>
                    <View style={[style.subcontainer, style.buttongroup_container]}>
                        <Input placeholder="Peso(Kg):" style={[style.input, style.buttongroup]} placeholderTextColor="#F5F0F6" type="numeric" borderless color="#F5F0F6" onChangeText={value => setWeight(value)}/>
                        <Input placeholder="Altura(m):" style={[style.input, style.buttongroup]} placeholderTextColor="#F5F0F6" type="numeric" borderless color="#F5F0F6" onChangeText={value => setHeight(value)}/>
                    </View>
                    <Button onPress={CalcularIMC} style={style.main_button}><Text style={style.button_text}>Calcular</Text></Button>
            </ImageBackground>
        </SafeAreaView>
    )
}