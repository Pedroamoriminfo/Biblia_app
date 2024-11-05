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
      <ScrollView style={styles.scrollView}>
        {livros && livros.map(livro => (
            <View>
            <Text style={styles.texto}>Biblia do Pedro</Text>
          </View>,
          <View style={styles.item} key={livro.liv_id}>
            <Text style={styles.texto}>{livro.liv_nome}</Text>
            {/* {livro.media.length > 0 && <Image source={{ uri: livro.media[0].file }} style={{ width: 100, height: 100 }} />} */}

            {/* Adicione mais campos conforme necessário */}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#E0FFFF',
    height: 150,
    justifyContent: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  texto: {
    fontSize: 36,
    alignContent:'center'
  },
  title: {
    fontSize: 32,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignContent:'center'
  },
});
export default LivrosLista;