import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import styles from './Style.jsx';
import { Input, Button, Icon, Text } from '@rneui/themed';
import { TextInputMask } from 'react-native-masked-text';

export default function InputMask() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCPF] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.divTitulo}>
                <Text h1 style={styles.titulo}>Usuário</Text>
                <Icon type='font-awesome' name="user" color="#000" size={100} />
            </View>
            <View style={styles.formContato}>
                <Input
                    placeholder='Digite seu nome'
                    inputContainerStyle={styles.inputContainer}
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <Input
                    placeholder='Digite seu email'
                    inputContainerStyle={styles.inputContainer}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInputMask
                    style={[styles.inputContainerMask, styles.inputStyle]}
                    placeholder='Digite seu telefone'
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={telefone}
                    onChangeText={text => setTelefone(text)}
                />
                <TextInputMask
                    style={[styles.inputContainerMask, styles.inputStyle]}
                    placeholder='Digite seu CPF'
                    type={'cpf'}
                    value={cpf}
                    onChangeText={text => setCPF(text)}
                />
                <Button radius={"sm"} type="solid">
                    Enviar
                    <Icon style={{ padding: 5 }} name="save" color="white" />
                </Button>
            </View>
        </SafeAreaView>
    );
}