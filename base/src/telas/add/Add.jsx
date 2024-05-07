import React, {useEffect, useState} from "react";
import { View, Image, SafeAreaView } from 'react-native';
import { Text, Button, Input } from 'galio-framework';
import style from "./Style.jsx";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SistemaArquivos from 'react-native-fs';
import { launchCamera } from 'react-native-image-picker';

// Diretório para salvar imagens
const diretorioImagens = `${SistemaArquivos.DocumentDirectoryPath}/imagens`;

// Cria o diretório se não existir
SistemaArquivos.mkdir(diretorioImagens).then(() => {
  console.log('Diretório criado');
}).catch(erro => {
  console.log('Erro ao criar diretório:', erro);
});

export default function Add( {navigation} ) {
    const [clothName, setClothName] = useState("");
    const [clothSize, setClothSize] = useState("");
    const [clothDescription, setClothDescription] = useState("");
    const [clothStyle, setClothStyle] = useState("");
    const [clothColor, setClothColor] = useState("");
    const [clothTags, setClothTags] = useState("");

    const [caminhoImagem, setCaminhoImagem] = useState(null);
    const [listaArquivos, setListaArquivos] = useState([]);

  useEffect(() => {
    const carregarArquivos = async () => {
      try {
        const resultado = await SistemaArquivos.readDir(diretorioImagens);
        const imagens = resultado.filter(arquivo => arquivo.isFile() && ['.png', '.jpg', '.jpeg'].includes(arquivo.name.toLowerCase().slice(-4)));
        setListaArquivos(imagens.map(arquivo => arquivo.name));
      } catch (erro) {
        console.error('Erro ao buscar arquivos', erro);
      }
    };

    carregarArquivos();
  }, []);

  const tirarFoto = () => {
    const opcoes = { mediaType: 'photo' };
    launchCamera(opcoes, (resposta) => {
      if (resposta.didCancel) {
        console.log('Cancelado pelo usuário');
      } else if (resposta.errorCode) {
        console.log('Erro da Câmera: ', resposta.errorMessage);
      } else if (resposta.assets && resposta.assets.length > 0) {
        const { uri } = resposta.assets[0];
        const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
        const nomeArquivo = `imagem_${timestamp}.jpg`;
        const caminhoDestino = `${diretorioImagens}/${nomeArquivo}`;

        SistemaArquivos.copyFile(uri, caminhoDestino)
          .then(() => {
            console.log('Imagem salva em:', caminhoDestino);
            setCaminhoImagem(caminhoDestino);
          })
          .catch(erro => console.log('Erro ao salvar a imagem:', erro));
      }
    });
  };
    
    return (
        <SafeAreaView style={style.main_container}>
            <View style={style.container_1}>
                {caminhoImagem ? (
                    <Button color="#ffffff" style={style.img_button} onPress={tirarFoto}><Image source={{ uri: `file://${caminhoImagem}` }} style={style.img} /></Button>
                ) : (
                    <Button color="#ffffff" shadowless style={[style.img_button, style.img_shadow_button]} onPress={tirarFoto}><Text style={style.subtext}>Foto da roupa</Text></Button>
                )}
            </View>
            <View style={style.container_2}>
                <View >
                    <Input placeholder="Nome:" style={style.input} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" onChangeText={value => setClothName(value)}/>
                </View>
                <View style={style.buttomgroup_container}>
                    <Input placeholder="Descrição:" style={[style.input, style.buttomgroup_1]} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" onChangeText={value => setClothDescription(value)}/>
                    <Input placeholder="Estilo:" style={[style.input, style.buttomgroup_1]} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" onChangeText={value => setClothStyle(value)}/>
                </View>
                <View style={style.buttomgroup_container}>
                    <Input placeholder="Tamanho:" style={[style.input, style.buttomgroup_2]} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" onChangeText={value => setClothSize(value)}/>
                    <Input placeholder="Cor:" style={[style.input, style.buttomgroup_2]} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" onChangeText={value => setClothColor(value)}/>
                    <Input placeholder="Tags:" style={[style.input, style.buttomgroup_2]} placeholderTextColor="#B2AEB2" borderless color="#F5F0F6" onChangeText={value => setClothTags(value)}/>
                </View>
            </View>
            <View style={style.button_container} >
                <Button color="#654E4D" shadowless style={style.main_buttom} onPress={() => navigation.navigate('Closet')}><Text style={style.buttom_text}>Adicionar ao Closet</Text></Button>
                <Button color="#654E4D" shadowless style={style.fav_button}><MaterialCommunityIcons name="heart" color={'#B2AEB2'} size={24} /></Button>
            </View>
        </SafeAreaView>
    )
}