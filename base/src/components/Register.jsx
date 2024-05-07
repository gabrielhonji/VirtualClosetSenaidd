import React, { useState } from "react";
import { View,Text, Button,StyleSheet, Alert, TextInput, } from "react-native";
import axios from 'axios';//O axios e utilizados para comunicar com a API (request)

const RegisterDb = ({navigation}) =>{
    const [mensagem, setMensagem]= useState('');
    const [formData, setFormData]= useState({
        id:'',
        nome:'',
        sobrenome:'',
        idade:'',
    });

    const handleInputChange = (name, value) =>{
        setFormData({...formData,[name]:value}); 
    };

    //Validar que os campos não são vazios
    const handleCadastrar = async()=>{
        if(!formData.id || !formData.nome || !formData.sobrenome || !formData.idade){
            setMensagem('Todos os campos são obrigatórios')
            return;
        }
        
        //envio informações para API Cadastrar no banco de dados
        try{
            await axios.post('http://10.0.2.2:8085/api/create', formData)
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate('Home');
        }
        catch(error){
            if (error.resnse.status === 401) {
                setMensagem('O ID'+formData.id+'Já existe na base de dados')
            }
            else{
                console.log(error)
                setMensagem('Ocorreu um erro ao Cadastrar o usuário, tente novamente')
            }
        }

    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar</Text>
            <TextInput 
            style={styles.input}
            placeholder="ID"
            onChangeText={(text) => handleInputChange ('id', text)}
            value={formData.id}
            />
            <TextInput 
            style={styles.input}
            placeholder="nome"
            onChangeText={(text) => handleInputChange ('nome', text)}
            value={formData.nome}
            />
            <TextInput 
            style={styles.input}
            placeholder="sobrenome"
            onChangeText={(text) => handleInputChange ('sobrenome', text)}
            value={formData.sobrenome}
            />
            <TextInput 
            style={styles.input}
            placeholder="idade"
            onChangeText={(text) => handleInputChange ('idade', text)}
            value={formData.idade}
            keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="Cadastrar"
                        onPress={handleCadastrar}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="Listar"
                        onPress={() => navigation.navigate('List')}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="Deletar"
                        onPress={() => navigation.navigate('Delete')}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="Atualizar"
                        onPress={() => navigation.navigate('Update')}
                    />
                </View>
            </View>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text>:null}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        marginBottom:'20',
    },
    input:{
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:10,
        padding:10,
        width:'80%',
    },
    buttonContainer:{
        flexDirection:'column',
        alignItems:"center",
        width:'40%',
    },
    button:{
        marginBottom:10,
        width:'100%',
    },
    mensagem:{
        color:'red',
        marginTop:10,
    }
});

export default RegisterDb;

