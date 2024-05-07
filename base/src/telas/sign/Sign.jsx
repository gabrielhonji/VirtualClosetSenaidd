import React, {useState} from "react";
import {Image, View, SafeAreaView } from "react-native";
import style from "./Style.jsx";
import { Text, Button, Input } from 'galio-framework';

export default function Sign( { navigation } ) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={style.main_container}>
            <View style={style.container_1}>
                <Image style={style.icon} source={require('../../../res/img/Icon.png')}/>
            </View>
            <View style={style.container_2}>
                <View style={[style.subcontainer, style.title]}>
                    <Text h1 style={style.text}>Cadastrar</Text>
                    <Text style={style.subtext}>Faça o cadastro para continuar</Text>
                </View>
                <View style={style.subcontainer}>
                    <Input placeholder="Nome" style={style.input} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" onChangeText={value => setNome(value)}/>
                    <Input placeholder="Email" style={style.input} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" type="email-address" onChangeText={value => setEmail(value)}/>
                    <Input placeholder="Senha" password viewPass style={style.input} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" iconColor="#F5F0F6" onChangeText={value => setPassword(value)}/>
                </View>
                <View style={style.subcontainer}>
                    <Button color="#654E4D" shadowless style={style.main_buttom} onPress={() => navigation.navigate('Inicio')}><Text style={style.buttom_text}>Entre</Text></Button>
                </View>
            </View>
            <View style={style.container_3}>
                <Text style={style.text}>Já tem uma conta? <Text onPress={() => navigation.navigate('Login')} style={style.link}>Conecte-se agora</Text></Text>
            </View>
        </SafeAreaView>
    )
}