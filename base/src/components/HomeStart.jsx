import React from "react";
import { View, Text, Button, StyleSheet,} from "react-native";

const HomeDb = ({navigation}) => {
    return (
        <View  style={styles.container}> 
            <Text style={styles.title}>SENAI</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Cadastrar"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Listar"
                    onPress={() => navigation.navigate('List')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Deletar"
                    onPress={() => navigation.navigate('Delete')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Atualizar"
                    onPress={() => navigation.navigate('Update')}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#323232',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginBottom: 20,
    },
    buttonContainer:{
        marginBottom: 10,
        width:'50%',
    },
});

export default HomeDb;