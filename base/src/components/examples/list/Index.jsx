import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import chicoWallpaper from '../../../../res/img/chico.png';
import style from './Style.jsx'

export default function ListaAlunos() {

    const [student, setStudent] = useState();

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setStudent(json))
    }, []);

    const students = [
        {id: '1', ra: '303978', name: 'Gabriel', age: '17'},
        {id: '2', ra: '523232', name: 'Ben Ten', age: '18'},
        {id: '3', ra: '423416', name: 'Albert Newton', age: '16'},
        {id: '4', ra: '312573', name: 'Unicamp', age: '16'},
        {id: '5', ra: '203292', name: 'Richard', age: '17'},
        {id: '6', ra: '325312', name: 'Strange Doutor', age: '17'},
    ];
    
    const ShowStudents = ({item}) => (
        <TouchableOpacity>
            <View style={style.Text_Container}>
                <Text h1 style={style.Text}>{item.email}</Text>
            </View>
        </TouchableOpacity>
    );
    
    return (
        <SafeAreaView>
            <ImageBackground style={{height: '100%'}} source={chicoWallpaper}>
                <FlatList 
                    data={student}
                    keyExtractor={item => item.id}
                    renderItem={ShowStudents}
                />
            </ImageBackground>
        </SafeAreaView>
    );
};