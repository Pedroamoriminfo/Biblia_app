import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const LivrosLista = () => {
  const [livros, setLivros] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/biblia_backend_v1/v1/books');
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
    <View>
      {livros && livros.map(livro => (
        <View key={livro.liv_id}>
          <Text>Id: {livro.liv_id}</Text>
          <Text>Título: {livro.liv_nome}</Text>
          <Text>Descrição: {livro.description}</Text>
          <Text>Nome da Empresa: {livro.company_name}</Text>
          {livro.media.length > 0 && <Image source={{ uri: livro.media[0].file }} style={{ width: 100, height: 100 }} />}
          {/* Adicione mais campos conforme necessário */}
        </View>
      ))}
    </View>
  );
}
export default LivrosLista;