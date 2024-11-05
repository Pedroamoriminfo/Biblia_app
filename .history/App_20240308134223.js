import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
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
    <Text style={styles.title}>Bíblia do Pedro</Text>
    <ScrollView style={styles.scrollView}>
      {livros.map(livro => (
        <View style={styles.item} key={livro.liv_id}>
          <Text style={styles.text}>{livro.liv_nome}</Text>
          {/* Uncomment below lines if media is available */}
          {/* {livro.media.length > 0 && <Image source={{ uri: livro.media[0].file }} style={{ width: 100, height: 100 }} />} */}
          {/* Adicione mais campos conforme necessário */}
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#E0FFFF',
    height: 70,
    justifyContent: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems:'center',
    maxWidth: 1300,
    padding: 20,
  },
  texto: {
    fontSize: 36,
    alignContent: 'center'
  },
  title: {
    fontSize: 32,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignContent: 'center'
  },
});
export default LivrosLista;