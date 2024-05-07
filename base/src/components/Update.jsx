import React, { useState } from "react";
import { View,Text, Button, StyleSheet, Alert, TextInput, } from "react-native";
import axios from 'axios'; //O axios e utilizados para comunicar com a API (request)
import { useRoute } from "@react-navigation/native";

const UpdateDb = ({navigation}) =>{
    const [mensagem, setMensagem]= useState('');
    const [formData, setFormData]= useState({
        nome:'',
        sobrenome:'',
        idade:'',
    });

    const route = useRoute();
    const id = route.params?.id;

    const handleInputChange = (name, value) =>{
        setFormData({...formData,[name]:value}); 
    };

    //Validar que os campos não são vazios
    const handleAtualizar = async()=>{
        if(!formData.nome || !formData.sobrenome || !formData.idade){
            setMensagem('Todos os campos são obrigatórios')
            return;
        }
        
        //envio informações para API Cadastrar no banco de dados
        try{
            await axios.put(`http://10.0.2.2:8085/api/atualizar/gabriel/honji/${id}`,formData);
            Alert.alert('Atualizado realizado com sucesso');
            navigation.navigate('Home');
        }
        catch(error){
           if (error.response.status === 401) {
                setMensagem('O ID ' + formData.id + 'Já existe no banco de dados')
           }
           else{
            console.log(error)
            setMensagem("Erro ao atualizar");
           }
        }

    };

    return(
        <View style={styles.container}>
            <Text>{id}</Text>
            <Text style={styles.title}>Atualizar</Text>
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
                    <Button title="Atualizar" onPress={handleAtualizar}/>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Voltar" onPress={() => navigation.navigate('List')}/>
                </View>
            </View>

            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text>:null}
        </View>
        

        
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
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

export default UpdateDb;

