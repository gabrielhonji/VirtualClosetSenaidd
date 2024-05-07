import React, { useEffect, useState } from 'react';
import { View, Image, Button, Text, ScrollView } from 'react-native';
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

const EnviarImagem = () => {
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Tirar fotos" onPress={tirarFoto} />
      {caminhoImagem ? (
        <Image source={{ uri: `file://${caminhoImagem}` }} style={{ width: 300, height: 300 }} />
      ) : (
        <Text>Nenhuma imagem selecionada</Text>
      )}
      <ScrollView>
        {listaArquivos.map((arquivo, indice) => (
          <Image key={indice} source={{ uri: `file://${caminhoImagem}` }} style={{margin: 10, width: 300, height: 300 }} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EnviarImagem;


