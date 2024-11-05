import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,StatusBar, SafeAreaView} from 'react-native';
import axios from 'axios';

const LivrosLista = () => {
  const [livros, setLivros] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://eutenho.com.br/biblia/v1/books');
        if (response.data.data) {
          setLivros(response.data.data);
        } else {
          console.log('Erro: Dados de livros não encontrados na resposta da API.');
        }
      } catch (error) {
        console.error('Erro ao buscar livros:', error.message);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
      {livros && livros.map(livro => (
        <FlatList style={styles.item} key={livro.liv_id}
          <Text>Id: {livro.liv_id}</Text>
          <Text>Livro: {livro.liv_nome}</Text>
          <Text>Descrição: {livro.description}</Text>
          {/* {livro.media.length > 0 && <Image source={{ uri: livro.media[0].file }} style={{ width: 100, height: 100 }} />} */}
          {/* Adicione mais campos conforme necessário */}
        />
      ))}
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#E0FFFF',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});
export default LivrosLista;